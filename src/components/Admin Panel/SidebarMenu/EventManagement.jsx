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
    <div className="w-full">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Manage Events</h1>

        <button
          onClick={() => setActiveType("event")}
          className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition w-full sm:w-auto"
        >
          <FaPlus />
          Create Event
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 border-b">Title</th>
              <th className="p-4 border-b">Location</th>
              <th className="p-4 border-b">Date</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((event) => (
              <tr
                key={event.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4">{event.title}</td>
                <td className="p-4">{event.location}</td>
                <td className="p-4">{event.date}</td>
                <td className="p-4">
                  <div className="flex gap-4">
                    <FaEdit
                      onClick={() => setEditItem(event)}
                      className="text-blue-600 cursor-pointer hover:scale-110 transition"
                    />
                    <FaTrash
                      onClick={() => handleDelete(event.id)}
                      className="text-red-600 cursor-pointer hover:scale-110 transition"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {data.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow rounded-lg p-4 space-y-3"
          >
            <div>
              <p className="text-sm text-gray-500">Title</p>
              <p className="font-semibold">{event.title}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p>{event.location}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p>{event.date}</p>
            </div>

            <div className="flex justify-end gap-4 pt-2">
              <FaEdit
                onClick={() => setEditItem(event)}
                className="text-blue-600 cursor-pointer text-lg"
              />
              <FaTrash
                onClick={() => handleDelete(event.id)}
                className="text-red-600 cursor-pointer text-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Create Form */}
      {activeType && (
        <CreateContentForm
          type={activeType}
          key={activeType}
          onClose={() => setActiveType(null)}
        />
      )}

      {/* Edit Form */}
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
