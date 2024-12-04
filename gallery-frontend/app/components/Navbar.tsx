import Link from "next/link";
import React from "react";
import Image from "next/image";
import display from "../display.png";

export default function Navbar() {
  return (
    <header className="bg-nav sm:sticky top-0 z-10 static">
      <nav className="flex flex-col gap-4 sm:justify-between items-center p-4 font-bold max-w-full mx-auto uppercase text-font sm:text-lg text-xs">

        <div className="flex flex-col items-center justify-evenly  gap-4 w-full px-4 sm:flex-row">
          <Link href="/" className="underline-animation">
            <span>Home</span>
          </Link>
          <Link href="/images" className="underline-animation">
            <span>Gallery</span>
          </Link>
          <Link href="/blog" className="underline-animation">
            <span>Blog</span>
          </Link>
          <Image src={display} alt="nav-logo" className="w-32" />
          <Link href="/about" className="underline-animation">
            <span>About</span>
          </Link>
          <Link href="/contact" className="underline-animation">
            <span>Contact</span>
          </Link>
          <Link href="/" className="underline-animation">
            <span>Support</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
      