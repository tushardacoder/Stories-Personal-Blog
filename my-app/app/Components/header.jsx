"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.postimg.cc/8zVbDRyH/header-logo.png"
            alt="Stories Logo"
            className="w-7 h-7 object-contain"
          />
          <span className="text-xl font-semibold text-gray-900">
            stories<span className="text-gray-500">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
       <div className="hidden md:flex items-center ml-auto gap-6">
  {/* Navigation */}
  <nav className="flex items-center gap-8 text-sm text-gray-600">
    <Link href="#" className="hover:text-gray-900">
      Layouts
    </Link>
    <Link href="#" className="hover:text-gray-900">
      Document
    </Link>

    <div className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
      <FiSearch size={16} />
      <span>Search</span>
    </div>
  </nav>

  {/* CTA */}
  <Link
    href="#"
    className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-md hover:bg-indigo-700 transition"
  >
    Buy Now
  </Link>
</div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-4 text-sm text-gray-600">
          <Link href="#" className="block hover:text-gray-900">
            Layouts
          </Link>
          <Link href="#" className="block hover:text-gray-900">
            Document
          </Link>

          <div className="flex items-center gap-2 hover:text-gray-900 cursor-pointer">
            <FiSearch size={16} />
            <span>Search</span>
          </div>

          <Link
            href="#"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Buy Now
          </Link>
        </div>
      )}
    </header>
  );
}
