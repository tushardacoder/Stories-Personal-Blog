"use client";

import { useEffect, useRef ,useState} from "react";


export default function Category() {

   const sliderRef = useRef(null);
 const [categories, setCategories] = useState([]);
  

  // Fetch categories JSON
  useEffect(() => {
    fetch("/categories.JSON")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  // Auto-scroll slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollPos = 0;
    let animationId;

    const autoScroll = () => {
      scrollPos += 0.5; // scroll speed
      slider.scrollLeft = scrollPos;

      // Reset when reaching the end
      if (scrollPos >= slider.scrollWidth / 2) {
        scrollPos = 0;
        slider.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [categories]);

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
          className="flex gap-6 overflow-hidden flex-nowrap "
        >
          {[...categories, ...categories].map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] flex items-center gap-4 rounded-lg border bg-gray-50 p-6  "
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full  ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
  
}
