import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import React from "react";
import { SocialIcon } from "./social-icon";

type FooterProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const Footer = (props: FooterProps) => {
  return (
    <footer
      {...props}
      className="bg-gray-900 py-6 px-4 flex flex-col items-center gap-6"
    >
      <Logo className="text-white" />

      <nav className="container flex flex-col items-center text-center gap-6 lg:flex-row">
        <h3 className="text-white font-semibold">Features</h3>
        <ul className="text-gray-5">
          <li>
            <Link href="#">Link Shortening</Link>
          </li>
          <li>
            <Link href="#">Custom Links</Link>
          </li>
          <li>
            <Link href="#">Analytics</Link>
          </li>
        </ul>
        <h3 className="text-white font-semibold">Resources</h3>
        <ul className="text-gray-5">
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Help Center</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
        <h3 className="text-white font-semibold">Company</h3>
        <ul className="text-gray-5">
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Our Team</Link>
          </li>
          <li>
            <Link href="#">Careers</Link>
          </li>
        </ul>
      </nav>
      <section className="flex gap-4 items-center justify-center my-3">
        <SocialIcon
          to="https://facebook.com"
          image={{
            src: "/icon-facebook.svg",
            alt: "Facebook Icon",
          }}
          width={20}
        />
        <SocialIcon
          to="https://twitter.com"
          image={{
            src: "/icon-twitter.svg",
            alt: "Twitter Icon",
          }}
          width={20}
        />
        <SocialIcon
          to="https://pinterest.com"
          image={{
            src: "/icon-pinterest.svg",
            alt: "Pinterest Icon",
          }}
          width={20}
        />
        <SocialIcon
          to="https://instagram.com"
          image={{
            src: "/icon-instagram.svg",
            alt: "Instagram Icon",
          }}
          width={20}
        />
      </section>
    </footer>
  );
};
