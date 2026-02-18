import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaArrowLeft } from "react-icons/fa";
import { getEventById } from "../../api/eventApi";
import { getBlogById } from "../../api/blogApi";
import { getProgramById } from "../../api/programApi";

const DetailsPage = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      if (type === "program") {
        const res = await getProgramById(id);
        setData(res.data);
      } else if (type === "blog") {
        const res = await getBlogById(id);
        setData(res.data);
      } else if (type === "event") {
        const res = await getEventById(id);
        setData(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();
}, [type, id]);

  if (!data) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        Content Not Found
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 mb-8 font-semibold hover:text-blue-800"
        >
          <FaArrowLeft /> Back
        </button>

        {/* Image */}
        <div className="mb-8">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>

        {/* Meta Info (only for blog & event) */}
        <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
          {data.author && (
            <span className="flex items-center gap-2">
              <FaUser /> {data.author}
            </span>
          )}
          {data.date && (
            <span className="flex items-center gap-2">
              <FaCalendarAlt /> {data.date}
            </span>
          )}
        </div>

        {/* Content */}
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {type === "blog" ?data.content : data.description}
        </p>
      </div>
    </section>
  );
};

export default DetailsPage;
