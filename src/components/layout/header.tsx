"use client";

import { useEffect, useRef, useState } from "react";

import { DesktopNav } from "./desktop-nav";
import { Hamburger } from "./hamburger";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const handleHamburgerClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        hamburgerRef.current &&
        hamburgerRef.current.contains(event.target as Node)
      ) {
        return;
      }

      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="container flex items-center justify-between px-4 py-6 w-full m-auto relative md:justify-start gap-12">
      <Image src="/logo.svg" alt="Shortly logo" width={100} height={100} />
      <DesktopNav />
      <Hamburger
        isOpen={isOpen}
        onClick={handleHamburgerClick}
        ref={hamburgerRef}
      />
      {isOpen && <MobileNav ref={ref} />}
    </header>
  );
};
