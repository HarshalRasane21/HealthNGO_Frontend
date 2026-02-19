import React, { useState } from "react";
import { getVolunteers, deleteVolunteer } from "../../../api/volunteerApi";
import { FaTrash } from "react-icons/fa";

export const VolunteerManagement = () => {
  {
    /* useState for changing state */
  }
  const [volunteers, setVolunteers] = useState([]);

  {
    /* fetching data */
  }
  const fetchData = async () => {
    try {
      const res = await getVolunteers();
      setVolunteers(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();

  {
    /* handle delete button functionality */
  }
  const handleDelete = async (id) => {
    await deleteVolunteer(id);
    fetchData();
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">
          Volunteer Applications
        </h1>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 border-b">Name</th>
              <th className="p-4 border-b">Phone</th>
              <th className="p-4 border-b">Email</th>
              <th className="p-4 border-b">Skills</th>
              <th className="p-4 border-b">Availability</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>

          <tbody>
            {volunteers.map((v) => (
              <tr key={v.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-4 font-medium">{v.full_name}</td>
                <td className="p-4">{v.phone || "—"}</td>
                <td className="p-4 break-all">{v.email}</td>
                <td className="p-4 max-w-xs truncate">{v.skills}</td>
                <td className="p-4">{v.availability}</td>
                <td className="p-4">
                  <FaTrash
                    onClick={() => handleDelete(v.id)}
                    className="text-red-600 cursor-pointer hover:scale-110 transition"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {volunteers.map((v) => (
          <div key={v.id} className="bg-white shadow rounded-lg p-4 space-y-3">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-semibold">{v.full_name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p>{v.phone || "—"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="break-all">{v.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Skills</p>
              <p>{v.skills}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Availability</p>
              <p>{v.availability}</p>
            </div>

            <div className="flex justify-end pt-2">
              <FaTrash
                onClick={() => handleDelete(v.id)}
                className="text-red-600 cursor-pointer text-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
