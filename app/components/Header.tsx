import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full border-b border-gray-200 bg-black text-white p-2">
      <div 
      className="flex h-20 w-20 ml-5 items-center justify-center rounded-full border border-white hover:border-2 bg-transparent overflow-hidden transition-all">
        <Image
          src="/assets/Logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="object-cover"
        />
      </div>
      <nav className="flex gap-6">
        <Link href="/" className="text-md font-bold hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-md font-bold hover:underline">
          About
        </Link>
        <Link href="/contact" className="text-md font-bold hover:underline">
          Contact
        </Link>
      </nav>

      <div className="flex gap-auto mr-5">
        <Link href="/contact" className="text-md p-3 font-medium hover:underline">
          Login
        </Link>
        <Link
          href="/contact"
          className="text-sm font-md text-black bg-teal-400 hover:bg-teal-300 p-3 rounded-full flex items-center gap-2 transition-colors"
        >
          <span>Sign Up</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
