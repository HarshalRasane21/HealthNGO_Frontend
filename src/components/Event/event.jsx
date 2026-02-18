import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { getEvents } from "../../api/eventApi";

const Event = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  {
    /* fetching events data */
  }
  const fetchData = async () => {
    try {
      const res = await getEvents();
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();

  return (
    <div className="bg-blue-200 min-h-screen py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl font-bold text-green-700">
          Upcoming Events & Health Camps
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Join our community initiatives and participate in our health awareness
          drives, camps, and workshops.
        </p>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {data.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="h-52 w-full object-cover"
            />

            {/* Content */}
            <div className="p-6">
              {/* Badge */}
              <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mb-3">
                {event.date}
              </span>

              <h3 className="text-xl font-semibold text-green-600">
                {event.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                <FaLocationArrow className="text-green-400" /> {event.location}
              </p>

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {event.description}
              </p>

              {/* view details button */}
              <button
                onClick={() => navigate(`/details/event/${event.id}`)}
                className="mt-4 text-green-600 font-semibold hover:underline"
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
