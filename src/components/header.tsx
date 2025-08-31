"use client";

import { useEffect, useRef, useState } from "react";

import { Hamburger } from "./hamburger";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleHamburgerClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    // Attach outside-click and Escape handlers only when the menu is open
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      // Ignore clicks on the toggle button itself
      if (
        buttonRef.current &&
        buttonRef.current.contains(event.target as Node)
      ) {
        return;
      }

      // Close when clicking outside the nav
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
    <header className="container flex items-center justify-between p-4 w-full m-auto relative">
      <Image src="/logo.svg" alt="Shortly logo" width={100} height={100} />
      <Hamburger
        isOpen={isOpen}
        onClick={handleHamburgerClick}
        ref={buttonRef}
      />
      {isOpen && (
        <nav
          className="flex flex-col items-center gap-4 absolute top-0 left-0 right-0 md:hidden translate-y-1/6 bg-purple-95 rounded-lg shadow-lg mx-6 py-8"
          ref={ref}
          id="mobile-nav"
        >
          <Link
            href="#"
            className="text-white hover:text-gray-4 transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-4 transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-4 transition-colors duration-200"
          >
            Resources
          </Link>
          <span className="bg-gray-5 h-px w-sm block my-4"></span>
          <Link
            href="#"
            className="text-white hover:text-gray-4 transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            href="#"
            className="text-white hover:scale-105 transition-transform duration-200 bg-blue-4 px-6 py-2 rounded-full w-xs font-bold text-center"
          >
            Sign Up
          </Link>
        </nav>
      )}
    </header>
  );
};
