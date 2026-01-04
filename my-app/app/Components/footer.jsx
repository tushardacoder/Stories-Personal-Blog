"use client"

import {
    FaFacebookF,
    FaTwitter,
    FaPinterestP,
} from "react-icons/fa";
import { ArrowUp } from "lucide-react";
export default function Footer() {
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-3 py-16">
                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* ABOUT ME */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 relative inline-block">
                            About Me
                            <span className="block w-10 h-[2px] bg-black mt-2"></span>
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Start writing, no matter what. The water does not flow
                            until the faucet is turned on.
                        </p>

                        <div className="text-sm text-gray-700 mb-4">
                            <p className="font-semibold">Address</p>
                            <p>123 Main Street</p>
                            <p>New York, NY 10001</p>
                        </div>

                        <div>
                            <p className="font-semibold text-sm mb-3">Follow me</p>
                            <div className="flex gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                                    <FaFacebookF size={14} />
                                </span>
                                <span className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center">
                                    <FaTwitter size={14} />
                                </span>
                                <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                                    <FaPinterestP size={14} />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* QUICK LINK */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">
                            Quick Link
                            <span className="block w-10 h-[2px] bg-black mt-2"></span>
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-600">
                            {[
                                "About me",
                                "Help & Support",
                                "Licensing Policy",
                                "Refund Policy",
                                "Hire me",
                                "Contact",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="border-b border-dotted pb-2 hover:text-black cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* TAG CLOUD */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">
                            Tagcloud
                            <span className="block w-10 h-[2px] bg-black mt-2"></span>
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "Beautiful",
                                "New York",
                                "Droll",
                                "Intimate",
                                "Loving",
                                "Travel",
                                "Fighting",
                            ].map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full border text-sm text-gray-600 hover:bg-black hover:text-white transition cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* NEWSLETTER */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">
                            Newsletter
                            <span className="block w-10 h-[2px] bg-black mt-2"></span>
                        </h3>

                        <p className="text-sm text-gray-600 mb-6">
                            Subscribe to our newsletter and get our newest
                            updates right on your inbox.
                        </p>

                        <div className="flex overflow-hidden rounded-full border mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-1 py-3 text-sm outline-none text-center"
                            />
                            <button
                                className="inline-flex whitespace-nowrap text-center items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 text-sm font-medium rounded-md transition-colors duration-200"
                            >
                                Subscribe
                            </button>



                        </div>

                        <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input type="checkbox" className="accent-indigo-500" />
                            I agree to the terms & conditions
                        </label>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t mt-16 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
                    <p>© 2026, Stories - Personal Blog HTML Template</p>
                    <p>
                        Design by <span className="text-gray-700">AliThemes</span> | All rights reserved
                    </p>
                </div>
            </div>
            {/* Scroll To Top Button (FOOTER ONLY) */}
            <button
                onClick={scrollUp}
                className="
    fixed bottom-8 right-8 z-50
    w-12 h-12 rounded-full
    bg-indigo-500 text-white
    flex items-center justify-center
    shadow-lg
    hover:bg-indigo-600 hover:scale-105
    transition
  "
                aria-label="Scroll up"
            >
                <ArrowUp size={20} />
            </button>

        </footer>
    );
}