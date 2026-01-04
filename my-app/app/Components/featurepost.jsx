const featuredData = {
  tags: ["Covid-19", "Inspiration", "Work online", "Stay home"],

  mainPost: {
    image: "https://i.postimg.cc/vmJYZTdf/Screenshot-2026-01-04-152316.png",
    categories: ["Travel", "Animal"],
    title:
      "Beachmaster Elephant Seal Fights off Rival Male, The match is uncompromising",
    time: "20 minutes ago",
    views: "23K Views",
  },

  sidePost: {
    image: "https://i.postimg.cc/FsB24q42/Screenshot-2026-01-04-151828.png",
    categories: ["Travel", "Food"],
    title: "Want fluffy Japanese pancakes but can’t fly to Tokyo?",
    meta: "27 August · 12 mins read · 23K views",
  },

  bottomPosts: [
    {
      image: "https://i.postimg.cc/QxQXxhfv/Screenshot-2026-01-04-150556.png",
      category: "Fashion",
      categoryColor: "text-orange-500",
      title: "Put Yourself in Your Customers Shoes",
      meta: "17 July · 8 mins read · 12K views",
    },
    {
      image: "https://i.postimg.cc/kXmmHLnC/Screenshot-2026-01-04-150621.png",
      category: "Travel",
      categoryColor: "text-blue-500",
      title: "Life and Death in the Empire of the Tiger",
      meta: "7 August · 15 mins read · 500 views",
    },
    {
      image: "https://i.postimg.cc/CKjtbxqb/Screenshot-2026-01-04-151551.png",
      category: "Lifestyle",
      categoryColor: "text-green-500",
      title: "When Two Wheels Are Better Than Four",
      meta: "15 June · 9 mins read · 1.2K views",
    },
  ],
};

export default function FeaturedPosts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
          Featured Posts
        </h2>

        <div className="text-xs text-gray-400 mt-2 sm:mt-0">
          Hot tags :
          {featuredData.tags.map((tag, i) => (
            <span key={i} className="ml-2 text-gray-600">
              # {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left big card */}
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden group">
          <img
            src={featuredData.mainPost.image}
            alt=""
            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex gap-3 text-xs mb-2 text-blue-300">
              {featuredData.mainPost.categories.map((cat, i) => (
                <span key={i}>{cat}</span>
              ))}
            </div>

            <h3 className="text-2xl font-bold leading-snug">
              {featuredData.mainPost.title}
            </h3>

            <div className="text-xs text-gray-300 mt-3 flex gap-4">
              <span>{featuredData.mainPost.time}</span>
              <span>{featuredData.mainPost.views}</span>
            </div>
          </div>
        </div>

        {/* Right top card */}
        <div className="rounded-xl overflow-hidden bg-white shadow">
          <img
            src={featuredData.sidePost.image}
            alt=""
            className="w-full h-48 object-cover"
          />

          <div className="p-5">
            <div className="flex gap-2 text-xs text-blue-500 mb-2">
              {featuredData.sidePost.categories.map((cat, i) => (
                <span key={i}>{cat}</span>
              ))}
            </div>

            <h4 className="font-semibold text-lg leading-snug">
              {featuredData.sidePost.title}
            </h4>

            <div className="text-xs text-gray-400 mt-3">
              {featuredData.sidePost.meta}
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        {featuredData.bottomPosts.map((post, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden bg-white shadow"
          >
            <img
              src={post.image}
              alt=""
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <span className={`text-xs ${post.categoryColor}`}>
                {post.category}
              </span>

              <h4 className="mt-2 font-semibold">{post.title}</h4>

              <p className="text-xs text-gray-400 mt-2">
                {post.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
