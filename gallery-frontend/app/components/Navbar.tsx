import Link from "next/link";
import React from "react";
import Image from "next/image";
import artWork from "../artwork.jpg";
import wave from "@/public/wave.svg"

export default function Navbar() {
  return (
    <header className="bg-purple-600 sm:sticky top-0 z-10 static">
      <nav className="flex flex-col gap-4 sm:justify-between items-center p-4 font-bold max-w-full mx-auto uppercase text-yellow-300 sm:text-lg text-xs">
        <h1>
          <Link href="/">CurlyMarimoo Gallery</Link>
        </h1>

        <div className="flex flex-col items-center justify-evenly  gap-4 w-full px-4 sm:flex-row">
          <a href="./" className="underline-animation">
            <span>Home</span>
          </a>
          <a href="./images" className="underline-animation">
            <span>Gallery</span>
          </a>
          <a href="./" className="underline-animation">
            <span>Blog</span>
          </a>
          <Image src={artWork} alt="nav-logo" className="w-32" />
          <a href="./about" className="underline-animation">
            <span>About</span>
          </a>
          <a href="./" className="underline-animation">
            <span>Contact</span>
          </a>
          <a href="./" className="underline-animation">
            <span>kofi</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
