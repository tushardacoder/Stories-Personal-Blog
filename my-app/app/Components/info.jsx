"use client";

import { useEffect, useState } from "react";

export default function Info() {
  const [categories, setCategories] = useState([]);

  // Fetch categories JSON
  useEffect(() => {
    fetch("/info.JSON")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {categories.map((section, i) => (
          <div key={i}>
            {/* Title */}
            <h3 className="text-sm font-semibold tracking-widest uppercase">
              {section.category}
            </h3>
            <div className="w-14 h-[2px] bg-black mt-2 mb-8" />

            {/* Posts */}
            <div className="space-y-8">
              {section.items.map((post, index) => (
                <div
                  key={index}
                  className="
                    group
                    flex
                    gap-4
                    items-start
                    rounded-lg
                    p-2
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  {/* Image */}
                  <div className="w-20 h-20 relative rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="
                        w-full h-full object-cover
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h4
                      className="
                        text-sm
                        font-semibold
                        leading-snug
                        mb-1
                        transition-colors
                        duration-300
                        group-hover:text-indigo-600
                      "
                    >
                      {post.title}
                    </h4>

                    <p className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
                      {post.date} • {post.views}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
