import Link from "next/link";
import React from "react";
import Image from "next/image";
import artWork from "../artwork.jpg";


export default function Navbar() {
  return (
    <header className="bg-purple-600 sm:sticky top-0 z-10 static">

      <nav className="flex flex-col gap-4 sm:justify-between items-center p-4 font-bold max-w-full mx-auto uppercase text-yellow-300 sm:text-lg text-xs">

        <h1>
          <Link href="/">CurlyMarimoo Gallery</Link>
        </h1>

        <div className="flex flex-col items-center justify-evenly  gap-4 w-full px-4 sm:flex-row">
          <a href="./">Home</a>
          <a href="./">Gallery</a>
          <a href="./">Blog</a>
          <Image src={artWork} alt="nav-logo" className="w-32" />
          <a href="./">About</a>
          <a href="./">Contact</a>
          <a href="./">kofi</a>
        </div>

      </nav>
    </header>
  );
}
