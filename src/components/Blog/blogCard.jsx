import React, { useState } from "react";
import { CategoryBadge } from "./blog";
import { FaCalendar, FaUser, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getBlogById } from "../../api/blogApi";

{
  /* feature post */
}
export const FeaturedPost = ({ id }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  {
    /* Featured blog data fetching */
  }
  const fetchData = async () => {
    try {
      const res = await getBlogById(id);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();

  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Top Featured */}
      <div className="grid md:grid-cols-2">
        <div className="relative overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
          />
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-green-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Featured
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 md:p-10">
          <CategoryBadge category={data.category} />

          <h3 className="mt-4 text-2xl font-bold text-gray-800 md:text-3xl">
            {data.title}
          </h3>

          <p className="mt-3 text-gray-600">{data.content}</p>

          <div className="mt-5 flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <FaUser size={14} />
              {data.author}
            </span>
            <span className="flex items-center gap-1.5">
              <FaCalendar size={14} />
              {data.date}
            </span>
          </div>

          <button
            onClick={() => navigate(`/details/blog/${2}`)}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Read Full Story
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
};

{
  /* blog card */
}
export const BlogCard = ({ post }) => {
  const navigate = useNavigate();
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <CategoryBadge category={post.category} />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <FaCalendar size={12} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <FaUser size={12} />
            {post.author}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-gray-800">{post.title}</h3>

        <p className="mt-2 text-sm text-gray-600">{post.content}</p>

        {/* Read More Button */}
        <button
          onClick={() => navigate(`/details/blog/${post.id}`)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          Read More
          <FaArrowRight size={14} />
        </button>
      </div>
    </article>
  );
};
