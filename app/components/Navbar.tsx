import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <ul className="flex items-center justify-center space-x-14">
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/about">About Me</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li className="logo ml-auto !important">
          {/* Use ml-auto to push the logo to the right */}
          <Image src="/githubLogo.png" width={30} height={30} alt="githubpic" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
