import Link from "next/link";
import React from "react";
import Image from "next/image";
import display from "../display.png";



{/*The Import for the drip effect - will update when color scheme decided*/}
{/*import wave from "../wave.svg";*/}

export default function Navbar() {
  return (
    <header className="block bg-nav sm:static top-0 z-10">
      <div className="bg-font relative">
        {/*Dripping effect for the nav bar - waiting on approp colour
        scheme to place and size properly - this is a rough estimate*/}
     {/* <Image src={wave} alt="nav-wave" className="w-full -z-50 backdrop-blur-sm absolute sm:mt-20 h-max mt-72"/> */} 
      </div>
      <nav className="flex flex-col gap-4 sm:justify-between items-center p-4 font-bold max-w-full mx-auto uppercase text-font sm:text-lg text-xs font-Anaheim">
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
      