"use client";

import { useEffect, useRef, useState } from "react";

export default function Category() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  // Fetch categories JSON
  useEffect(() => {
    fetch("/categories.JSON")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  // Auto-scroll slider (pause on hover)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isHovering) return;

    let scrollPos = slider.scrollLeft;

    const autoScroll = () => {
      scrollPos += 0.5;
      slider.scrollLeft = scrollPos;

      if (scrollPos >= slider.scrollWidth / 2) {
        scrollPos = 0;
        slider.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, [categories, isHovering]);

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-800">
            Categories
          </h2>
          <div className="mt-2 h-[3px] w-12 bg-gray-900" />
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="flex gap-6 overflow-hidden flex-nowrap"
        >
          {[...categories, ...categories].map((item, index) => (
            <div
              key={index}
              className="
                group
                min-w-[320px]
                flex items-center gap-4
                rounded-xl
                border
                bg-gray-50
                p-6
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:scale-[1.03]
                hover:shadow-xl
                hover:bg-white
              "
            >
              {/* Image */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-full w-full object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-indigo-600">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
