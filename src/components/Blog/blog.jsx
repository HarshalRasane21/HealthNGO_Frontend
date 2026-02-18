import React, { useState } from "react";
import { FaArrowRight, FaTag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BlogCard, FeaturedPost } from "./blogCard";
import { getBlogs } from "../../api/blogApi";

{
  /* Category badge */
}
export const CategoryBadge = ({ category }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
    <FaTag size={12} />
    {category}
  </span>
);

{
  /* blog section */
}
const BlogSection = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  {/* Blog Data Fetching */}
  const fetchData = async () => {
    try {
      const res = await getBlogs();
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Blog Header  */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            Our Blog
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-800 md:text-5xl">
            Stories of <span className="text-blue-600">Hope</span> &{" "}
            <span className="text-green-500">Impact</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Read about the communities we serve and the difference your support
            makes.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        {/* top 1st featured post */}

        <div className="mb-12">
          <FeaturedPost id={2} />
        </div>

        {/* Mappping on blog card */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View Articles Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => navigate("/articles")}
            className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 px-8 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            View All Articles
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
