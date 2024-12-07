import React from "react";
import Image from "next/image";
import display from "../display.png";
import Year from "./date";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-nav">
      <div className="container m-auto space-y-8 px-6 py-16 text-text md:px-12 lg:px-20 font-Anaheim">
        <div className="flex flex-wrap items-center justify-between gap-4 bottom-0">
          <Image
            width="100"
            height="42"
            src={display}
            alt="Curly Marimoo"
            className="w-32"
          />
          <div className="flex flex-row items-center justify-evenly gap-4">
            {/* <!-- Discord --> */}
            <a href="https://discord.gg/qv7hKH5q" role="button" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-black hover:text-white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
                />
              </svg>
            </a>
            {/* <!-- Instagram --> */}
            <a href="https://www.instagram.com/curlymarimoo" role="button" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-black hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* <!-- Twitter --> */}
            <a href="https://x.com/CurlyMarimoo" role="button" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-black hover:text-white"
                viewBox="0 0 24 24"
              >
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />

                <path
                  fill="currentColor"
                  d="M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
          <div>
            <h6 className="text-lg font-medium text-font">About</h6>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <a href="./about" className="transition hover:text-cyan-600">
                  History
                </a>
              </li>
              <li>
                <a href="./" className="transition hover:text-cyan-600">
                  Commission
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-medium text-font">Illustrator</h6>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <a href="#" className="transition hover:text-cyan-600">
                  Reviews
                </a>
              </li>
              <li>
                <Link
                  href="/characters"
                  className="transition hover:text-cyan-600"
                >
                  Characters
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-medium text-font">Resources</h6>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <a href="#" className="transition hover:text-cyan-600">
                  Equipment
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-600">
                  Supplies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-medium text-font">Support</h6>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <a href="#" className="transition hover:text-cyan-600">
                  Get a commission
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-600">
                  Buy me a coffee?
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-medium text-font">Connect</h6>
            <ul className="mt-4 list-inside space-y-4">
              <li>
                <a href="#" className="transition hover:text-cyan-600">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-600">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-600">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/*DEVELOPER INFO*/}
        <div className="flex flex-row sm:flex-col mx-auto justify-evenly items-center text-font align-baseline">
          <div>
            <h3 className="flex sm:flex-row flex-col w-max text-center justify-evenly gap-2 mx-auto mt-16">
              &copy;{" "}
              <a href="https://www.lukethewebdev.uk/" target="_blank">
                Luke Mcnicol.
              </a>{" "}
              <Year /> All Rights Reserved.
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
