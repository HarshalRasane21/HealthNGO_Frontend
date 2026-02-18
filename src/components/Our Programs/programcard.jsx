import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaServicestack } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProgramCard = ({ title, description, image, colorClass, index, id }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Program Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-500"
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div
            className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full ${colorClass} shadow-lg`}
          >
            <FaServicestack className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
          <button
            onClick={() => navigate(`/details/program/${id}`)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Know More
            <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ProgramCard;
