
"use client"
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import {  HiX } from "react-icons/hi";
import { useState} from "react";

export default function Navbar() {
     const [open, setOpen] = useState(false);
  return (
    <header className="">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-between justify-between h-16">

          {/* Left Menu */}
          <ul className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-700">
            <li className="flex items-center gap-1 text-blue-600">
              <span>🏠</span>
              <Link href="/">Home</Link>
            </li>
            <li><Link href="/travel">Travel</Link></li>
            <li className="flex items-center gap-2">
             <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>

              <Link href="/mega-menu">Mega Menu</Link>
            </li>
            <li><Link href="/guides">Guides</Link></li>
            <li><Link href="/food">Food</Link></li>
            <li><Link href="/hotels">Hotels</Link></li>
            <li><Link href="/review">Review</Link></li>
            <li><Link href="/healthy">Healthy</Link></li>
            <li><Link href="/lifestyle">Lifestyle</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white">
              <FaFacebookF size={10} />
            </Link>
            <Link href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-400 text-white">
              <FaTwitter size={10} />
            </Link>
            <Link href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-red-600 text-white">
              <FaPinterestP size={10} />
            </Link>

            {/* Mobile Menu */}
            {/* Overlay */}


              <div className="">
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className=" text-gray-700"
            >
              <HiMenu size={26} />
            </button>
          </div>
        </nav>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <HiX size={24} />
          </button>
        </div>

        <div className="px-6 space-y-8 overflow-y-auto h-full pb-10">

          {/* HOT TOPICS */}
          <section>
            <h4 className="text-xs font-semibold tracking-widest mb-4">
              HOT TOPICS
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["Travel tips", 30],
                ["Book review", 25],
                ["Hotel review", 19],
                ["Destinations", 22],
                ["Lifestyle", 25],
              ].map(([title, count]) => (
                <li
                  key={title}
                  className="flex justify-between border-b pb-2"
                >
                  <span>{title}</span>
                  <span className="bg-gray-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {count}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* DON'T MISS */}
          <section>
            <h4 className="text-xs font-semibold tracking-widest mb-4">
              DON’T MISS
            </h4>

            <div className="space-y-4">
              <div className="flex gap-3">
                <img
                  src="https://i.postimg.cc/Kct1hvf1/Screenshot-2026-01-04-103144.png"
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="text-sm">
                  <p className="font-medium leading-snug">
                    The Life of a Travel Writer with David Farley
                  </p>
                  <span className="text-xs text-gray-500">
                    05 August • 300 Views
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://i.postimg.cc/jS1xJGcG/Screenshot-2026-01-04-103229.png"
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="text-sm">
                  <p className="font-medium leading-snug">
                    Why Don’t More Black American Women Travel...
                  </p>
                  <span className="text-xs text-gray-500">
                    12 August • 23K Views
                  </span>
                </div>

                
              </div>

                <div className="flex gap-3">
                <img
                  src="https://i.postimg.cc/jS1xJGcG/Screenshot-2026-01-04-103229.png"
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="text-sm">
                  <p className="font-medium leading-snug">
                    The 22 Best Things to See and Do in Bangkok
                  </p>
                  <span className="text-xs text-gray-500">
                    27 August • 23K Views
                  </span>
                </div>

                
              </div>
            </div>
          </section>

          {/* AD BANNER */}
          <section>
            <h4 className="text-xs font-semibold tracking-widest mb-4">
              ADVERTISE BANNER
            </h4>
            <img
              src="https://i.postimg.cc/5Nx2c5jZ/Screenshot-2026-01-04-103408.png"
              className="rounded-lg"
            />
          </section>
        </div>
      </div>

            
          </div>

        </div>
      </nav>
    </header>
  );
}
