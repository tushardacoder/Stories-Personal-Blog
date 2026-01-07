"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://i.postimg.cc/FKVqY29s/dachshund-8910099-1280.jpg",
    category: "LIFESTYLE",
    tag: "DESTINATIONS",
    title: "Abstract Australia from Above",
    meta: "15 September 2020 · 23k Views",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/rpy6N8Z2/flowers-6808776-1280.jpg",
    category: "TRAVEL",
    tag: "ADVENTURE",
    title: "Exploring the Beauty",
    meta: "20 October 2020 · 18k Views",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/BZLrg7ps/monk-1791113-1280.webp",
    category: "Meditation",
    tag: "ADVENTURE",
    title: "Exploring the Mountains",
    meta: "20 October 2020 · 18k Views",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="
           relative w-full
    h-screen
    md:h-screen
    lg:w-[80%] lg:h-[70vh]
    overflow-hidden
    rounded-none lg:rounded-2xl
    mx-auto
      "
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6">
            <div className="text-white max-w-2xl">
              <p className="text-xs sm:text-sm tracking-widest uppercase mb-3">
                <span className="text-gray-300">{slide.category}</span>
                <span className="mx-2 text-orange-400">•</span>
                <span className="text-orange-400">{slide.tag}</span>
              </p>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {slide.title}
              </h1>

              <p className="text-xs sm:text-sm text-gray-200">
                {slide.meta}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="
          absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-14
          bg-white/80 hover:bg-white p-2 rounded-full transition
        "
      >
        <ChevronLeft className="w-5 h-5 text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="
          absolute bottom-4 sm:bottom-6 left-1/2 translate-x-2
          bg-white/80 hover:bg-white p-2 rounded-full transition
        "
      >
        <ChevronRight className="w-5 h-5 text-black" />
      </button>
    </div>
  );
}
