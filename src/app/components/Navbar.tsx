'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md mx-4 sm:mx-20 my-7 px-6 py-4 rounded-2xl flex items-center justify-between">
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <h2
          className="text-xl font-bold text-gray-800 cursor-pointer sm:cursor-default"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Alware
        </h2>

        {/* Hamburger menu on small screens */}
        <button
          className="text-2xl text-gray-800 sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Links: horizontal on sm+, vertical on mobile */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col sm:flex sm:flex-row sm:items-center absolute sm:static top-16 left-4 right-4 bg-white sm:bg-transparent rounded-lg sm:rounded-none p-4 sm:p-0 shadow-lg sm:shadow-none gap-4 sm:gap-6 font-semibold text-md transition-all duration-300`}
      >
        <Link href="/#about" className="text-gray-600 hover:text-blue-600 transition">
          About
        </Link>
        <Link href="/#solutions" className="text-gray-600 hover:text-blue-600 transition">
          Solutions
        </Link>
        <Link href="/#clients" className="text-gray-600 hover:text-blue-600 transition">
          Clients
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
