import React, { useState } from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BlogCard } from "./blogCard";
import { getBlogs } from "../../api/blogApi";

const AllArticles = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [data, setData] = useState([]);

  {
    /* Blog Data Fetching */
  }
  const fetchData = async () => {
    try {
      const res = await getBlogs();
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();

  {
    /* storing articles categories */
  }
  const categories = [
    "All",
    ...new Set(data.map((data) => data.category).filter(Boolean)),
  ];

  {
    /* fetching data through search and category */
  }
  const filteredPosts = data.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;

    const title = post.title || "";
    const excerpt = post.excerpt || "";
    const author = post.author || "";

    const matchesSearch =
      title.toLowerCase().includes(search.toLowerCase()) ||
      excerpt.toLowerCase().includes(search.toLowerCase()) ||
      author.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 mb-8 font-semibold hover:text-blue-800"
        >
          <FaArrowLeft /> Back
        </button>

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">All Articles</h1>
          <p className="text-gray-600 mt-3">
            Explore all our stories, updates and health awareness articles.
          </p>
        </div>

        {/* Filter though searching */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Search box */}
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Category Filter box */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            No articles found.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllArticles;
