"use client";

const posts = [
  {
    id: 1,
    category: "Food",
    color: "text-blue-600",
    title: "Helpful Tips for Working from Home as a Freelancer",
    date: "7 August",
    read: "11 mins read",
    views: "3K views",
    image: "https://i.postimg.cc/FHHbKJCD/Screenshot-2026-01-04-104943.png",
  },
  {
    id: 2,
    category: "Cooking",
    color: "text-green-600",
    title: "10 Easy Ways to Be Environmentally Conscious At Home",
    date: "27 Sep",
    read: "10 mins read",
    views: "22K views",
    image: "https://i.postimg.cc/3wP29f8L/Screenshot-2026-01-04-105005.png",
  },
  {
    id: 3,
    category: "Cooking",
    color: "text-orange-500",
    title: "My Favorite Comfies to Lounge in At Home",
    date: "7 August",
    read: "9 mins read",
    views: "12K views",
    image: "https://i.postimg.cc/XqKKrK01/Screenshot-2026-01-04-105043.png",
  },
  {
    id: 4,
    category: "Travel",
    color: "text-red-500",
    title: "How to Give Your Space a Parisian-Inspired Makeover",
    date: "27 August",
    read: "12 mins read",
    views: "23K views",
    image: "https://i.postimg.cc/y6h0XTwg/Screenshot-2026-01-04-105135.png",
  },
];

const comments = [
  {
    name: "David",
    date: "16 Jan 2020",
    text: "A writer is someone for whom writing is more difficult than...",
    avatar: "https://i.postimg.cc/rwH4FZr2/Screenshot-2026-01-04-105219.png",
  },
  {
    name: "Kokawa",
    date: "12 Feb 2020",
    text: "Striking pewter studded epaulettes silver zips",
    
    avatar:"https://i.postimg.cc/sgbBRBkB/Screenshot-2026-01-04-105242.png",
  },
  {
    name: "Tsukasi",
    date: "18 May 2020",
    text: "Workwear bow detailing a slingback buckle strap",
    avatar: "https://i.postimg.cc/MHtMk9S5/Screenshot-2026-01-04-105302.png",
  },
];

const instagram = [
  {
    id: 1,
    image: "https://i.postimg.cc/GtPNbs7K/Screenshot-2026-01-04-111353.png",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/bNNS0f0Y/Screenshot-2026-01-04-105600.png",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/fW3RMWvL/Screenshot-2026-01-04-105637.png",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/8CDSWNWM/Screenshot-2026-01-04-105701.png",
  },
   {
    id: 5,
    image: "https://i.postimg.cc/k5wkb87M/Screenshot-2026-01-04-105726.png",
  },
  {
    id: 6,
    image: "https://i.postimg.cc/SxL0m35y/Screenshot-2026-01-04-105749.png",
  }
]

export default function Post() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

      {/* LEFT – LATEST POSTS */}
      <div className="lg:col-span-2">
        <h3 className="text-xs font-semibold tracking-widest mb-8 border-b pb-3">
          LATEST POSTS
        </h3>

        <div className="space-y-10">
          {posts.map((post) => (
            <div key={post.id} className="flex gap-6">
              <img
                src={post.image}
                className="w-48 h-32 rounded-lg object-cover"
              />

              <div>
                <span className={`text-xs font-semibold ${post.color}`}>
                  {post.category} .
                </span>

                <h2 className="text-lg font-bold leading-snug mt-1">
                  {post.title}
                </h2>

                <div className="text-xs text-gray-500 mt-2 flex gap-4">
                  <span>{post.date}</span>
                  <span>{post.read}</span>
                  <span>{post.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
       <div className="flex items-center gap-3 mt-12">
  {/* Left Arrow */}
  <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100">
    <svg
      className="w-4 h-4 text-gray-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Page Numbers */}
  {["01", "02", "03", "04"].map((n, i) => (
    <button
      key={i}
      className={`w-9 h-9 rounded-full border text-sm ${
        i === 0
          ? "bg-blue-600 text-white border-blue-600"
          : "text-gray-500 hover:bg-gray-100"
      }`}
    >
      {n}
    </button>
  ))}

  {/* Right Arrow */}
  <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100">
    <svg
      className="w-4 h-4 text-gray-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>
 </div>

      {/* RIGHT – SIDEBAR */}
      <aside className="space-y-12">

        {/* LAST COMMENTS */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest mb-6 border-b pb-3">
            LAST COMMENTS
          </h3>

          <div className="space-y-6">
            {comments.map((c, i) => (
              <div key={i} className="flex gap-4 border rounded-lg p-4">
                <img
                  src={c.avatar}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">
                    {c.name}
                    <span className="text-xs text-gray-400 ml-2">
                      · {c.date}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INSTAGRAM */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest mb-6 border-b pb-3">
            INSTAGRAM
          </h3>

         <div className="grid grid-cols-3 gap-3">
  {instagram.map((item) => (
    <img
      key={item.id}
      src={item.image}
      className="w-full h-24 object-cover rounded-lg"
      alt="Instagram"
    />
  ))}
</div>

        </div>

      </aside>
    </section>
  );
}
