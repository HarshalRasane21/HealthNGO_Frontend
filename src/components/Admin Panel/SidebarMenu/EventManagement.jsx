import React from "react";
import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import CreateContentForm from "../CreateContent/CreateContentForm";
import EditContentForm from "../CreateContent/EditContentForm";
import { deleteEvent, getEvents } from "../../../api/eventApi";

export const EventManagement = () => {
  {
    /* useState to changing state */
  }
  const [activeType, setActiveType] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [data, setData] = useState([]);

  {
    /* fetch events data */
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

  {
    /* Handle delete button fuctionality */
  }
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await deleteEvent(id);
      alert("Event deleted successfully");
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        {/* Title */}
        <h1 className="text-2xl font-bold">Manage Events</h1>

        {/* Create button */}
        <button
          onClick={() => setActiveType("event")}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          <FaPlus /> Create Event
        </button>
      </div>

      {/* Table with fetch events data */}
      <table className="w-full bg-white rounded-xl shadow border border-gray-400 border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4 border border-gray-400 px-4 py-2">Title</th>
            <th className="border border-gray-400 px-4 py-2">Location</th>
            <th className=" border border-gray-400 px-4 py-2">Date</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping on fetch data */}
          {data.map((event) => (
            <tr key={event.id} className="border-t">
              <td className="p-4 border border-gray-400 px-4 py-2">
                {event.title}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {event.location}
              </td>
              <td className="border border-gray-400 px-4 py-2">{event.date}</td>
              <td className="flex gap-3 p-4 ">
                <FaEdit
                  onClick={() => setEditItem(event)}
                  className="text-blue-600 cursor-pointer"
                />
                <FaTrash
                  onClick={() => handleDelete(event.id)}
                  className="text-red-600 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* create form redirecting with there activetype */}
      {activeType && (
        <CreateContentForm
          type={activeType}
          key={activeType}
          onClose={() => setActiveType(null)}
        />
      )}

      {/* edit form redirecting with there activetype */}
      {editItem && (
        <EditContentForm
          key={editItem.id}
          type="event"
          existingData={editItem}
          onClose={() => setEditItem(null)}
        />
      )}
    </div>
  );
};
