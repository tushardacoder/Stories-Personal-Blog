"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiFileText } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close search on ESC
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setSearchOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <>
      {/* HEADER */}
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
            <nav className="flex items-center gap-8 text-sm text-gray-600">
              <li className="relative group flex items-center gap-1 cursor-pointer">
                <Link href="#" className="hover:text-gray-900 flex items-center gap-1">
                  Layouts
                  <MdKeyboardArrowDown />
                </Link>

                {/* Dropdown */}
                <ul
                  className="absolute top-full left-0 mt-2 w-40 bg-white border rounded-md shadow-lg
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               transition-all duration-200 z-50"
                >
                  <li>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Home default
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home-2"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Homepage 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home-3"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Homepage 3
                    </Link>
                  </li>
                </ul>
              </li>

              <Link href="#" className="hover:text-gray-900">
                <span className="flex items-center gap-1">
                  <FiFileText size={12} />
                  Document
                </span>


              </Link>

              {/* SEARCH */}
              <div
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 cursor-pointer hover:text-gray-900"
              >
                <FiSearch size={16} />
                <span>Search</span>
              </div>
            </nav>

            <Link
              href="#"
              className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Buy Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t bg-white px-6 py-4 space-y-4 text-sm text-gray-600">
            <Link href="#" className="block hover:text-gray-900">
              Layouts
            </Link>
            <Link href="#" className="block hover:text-gray-900">
               <span className="flex items-center gap-1">
                  <FiFileText size={12} />
                  Document
                </span>
            </Link>

            <div
              onClick={() => {
                setSearchOpen(true);
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 cursor-pointer hover:text-gray-900"
            >
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

      {/* SEARCH OVERLAY */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center px-4">
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-black"
          >
            <FiX size={24} />
          </button>

          <div className="w-full max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-light text-gray-200 tracking-widest mb-10">
              SEARCH
            </h1>

            <div className="relative mb-8">
              <input
                autoFocus
                type="text"
                placeholder="Search stories, places and people"
                className="w-full border-b border-gray-300 py-3 text-lg text-center outline-none focus:border-gray-600"
              />
              <FiSearch className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="mb-12 text-sm text-gray-500">
              <p className="mb-2 font-medium">Suggested keywords:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "World",
                  "American",
                  "Opinion",
                  "Tech",
                  "Science",
                  "Books",
                  "Travel",
                  "Business",
                ].map((item) => (
                  <span
                    key={item}
                    className="cursor-pointer hover:text-gray-900"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Travel Tips",
                  image:
                    "https://i.postimg.cc/Ss2JP5pn/lifestyle.png",
                },
                {
                  title: "Lifestyle",
                  image:
                    "https://i.postimg.cc/J4wBf100/Entertainment.png",
                },
                {
                  title: "Hotel Review",
                  image:
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition"
                >
                  {/* LEFT IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />

                  {/* RIGHT CONTENT */}
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
