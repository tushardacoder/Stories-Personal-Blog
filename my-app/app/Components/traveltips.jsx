"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaShareAlt,
} from "react-icons/fa";

const travelTips = [
  {
    id: 1,
    image: "https://i.postimg.cc/K80Jn397/Screenshot_2026_01_04_145414.png",
    category: "Artists · Film",
    title: "Easy Ways to Use Alternatives to Plastic",
    desc:
      "Graduating from a top accelerator or incubator can be as career-defining for a startup founder as an elite university diploma.",
    date: "27 August",
    read: "12 mins read",
    views: "23K views",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/NFRdTNVM/Screenshot_2026_01_04_145437.png",
    category: "Fashion",
    title: "Tips for Growing Healthy, Longer Hair",
    desc:
      "Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu.",
    date: "12 August",
    read: "6 mins read",
    views: "3K views",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/3JdRKPs2/images.jpg",
    category: "Lifestyle",
    title: "Project Ideas Around the House",
    desc: "Sed tempor condimentum metus non tempor. Maecenas non augue aliquam.",
    date: "27 August",
    read: "12 mins read",
    views: "23K views",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/hv80hXzb/Screenshot_2026_01_04_145501.png",
    category: "Hotels",
    title: "How to Give Yourself a Spa Day from Home",
    desc: "Graduating from a top accelerator or incubator can be as career-defining.",
    date: "18 August",
    read: "14 mins read",
    views: "23K views",
  },
];

const popularPosts = [
  {
    id: 1,
    title: "Spending Some Quality Time with Kids? It’s...",
    date: "05 August",
    views: "150 views",
    image: "https://i.postimg.cc/76sswGzZ/Screenshot-2026-01-04-145234.png",
  },
  {
    id: 2,
    title: "Relationship Podcasts are Having “That” Talk",
    date: "12 August",
    views: "6K views",
    image: "https://i.postimg.cc/HWNZNMdp/Screenshot-2026-01-04-145258.png",
  },
  {
    id: 3,
    title: "Here’s How to Get the Best Sleep at Night",
    date: "15 August",
    views: "16K views",
    image: "https://i.postimg.cc/3WMZxgxJ/Screenshot_2026_01_04_145322.png",
  },
  {
    id: 4,
    title: "America’s Governors Get Tested for a Virus",
    date: "12 August",
    views: "3K views",
    image: "https://i.postimg.cc/BnBRRvmK/Screenshot_2026_01_04_145342.png",
  },
];

export default function Traveltips() {
  // ✅ Add state for the share popup
  const [activeShare, setActiveShare] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-6">
            Travel Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {travelTips.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* SHARE BUTTON */}
                  <button
                    onClick={() =>
                      setActiveShare(activeShare === item.id ? null : item.id)
                    }
                    className="absolute bottom-3 right-3 w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-20"
                  >
                    <FaShareAlt size={14} />
                  </button>

                  {/* SHARE POPUP */}
                  {activeShare === item.id && (
                    <div className="absolute bottom-14 right-3 bg-white rounded-lg shadow-lg p-2 flex gap-2 z-30 animate-slideLeft">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center"
                      >
                        <FaFacebookF size={12} />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center"
                      >
                        <FaTwitter size={12} />
                      </a>

                       <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center"
                      >
                        <FaPinterestP size={12} />
                      </a>
                     
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs text-blue-500 font-medium transition-colors group-hover:text-indigo-600">
                    {item.category}
                  </span>

                  <h3 className="mt-2 font-semibold text-lg leading-snug transition-colors group-hover:text-indigo-700">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 transition-colors group-hover:text-gray-700">
                    {item.desc}
                  </p>

                  <div className="text-xs text-gray-400 mt-4 flex gap-4 transition-colors group-hover:text-gray-600">
                    <span>{item.date}</span>
                    <span>{item.read}</span>
                    <span>{item.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-8">
          {/* Author */}
          <div className="bg-white rounded-xl shadow p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img
              src="https://i.postimg.cc/7ZZ5T5Gc/Screenshot-2026-01-04-145006.png"
              className="w-20 h-20 rounded-full mx-auto object-cover transition-transform duration-300 hover:scale-110"
              alt="Author"
            />

            <h4 className="mt-4 font-semibold transition-colors hover:text-indigo-600">
              Hello, I'm Steven
            </h4>

            <p className="text-sm text-gray-500 mt-2 transition-colors hover:text-gray-700">
              Hi, I'm Steven, a Florida native, who left my career in corporate
              wealth management six years ago to embark on a summer of soul
              searching.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <p className="font-semibold text-sm">Follow me</p>

              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <FaFacebookF size={12} />
                </span>
                <span className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center">
                  <FaTwitter size={12} />
                </span>
                <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                  <FaPinterestP size={12} />
                </span>
              </div>
            </div>
          </div>

          {/* Most Popular */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-500 mb-4">
              Most Popular
            </h4>

            <div className="space-y-4">
              {popularPosts.map((post) => (
                <div
                  key={post.id}
                  className="group flex gap-4 bg-white p-3 rounded-lg shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={post.image}
                    className="w-16 h-16 rounded object-cover transition-transform duration-300 group-hover:scale-110"
                    alt={post.title}
                  />
                  <div>
                    <h5 className="text-sm font-medium leading-snug transition-colors group-hover:text-indigo-600">
                      {post.title}
                    </h5>
                    <p className="text-xs text-gray-400 mt-1 transition-colors group-hover:text-gray-600">
                      {post.date} · {post.views}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
