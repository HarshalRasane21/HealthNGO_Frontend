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
    <div>
      {/* Title */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Volunteer Applications</h1>
      </div>

      {/* Table with fetch data */}
      <table className="w-full bg-white rounded-xl shadow border border-gray-400 border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4 border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Phone</th>
            <th className=" border border-gray-400 px-4 py-2">Email</th>
            <th className=" border border-gray-400 px-4 py-2">Skills</th>
            <th className=" border border-gray-400 px-4 py-2">Availability</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping on fetch data */}
          {volunteers.map((v) => (
            <tr key={v.id} className="border-t">
              <td className="p-4 border border-gray-400 px-4 py-2">
                {v.full_name}
              </td>
              <td className=" border border-gray-400 px-4 py-2">
                {v.phone ? v.phone : "null"}
              </td>
              <td className=" border border-gray-400 px-4 py-2">{v.email}</td>
              <td className="border border-gray-400 px-4 py-2">{v.skills}</td>
              <td className="border border-gray-400 px-4 py-2">
                {v.availability}
              </td>
              <td className="flex gap-3 p-4 ">
                {/* Delete button */}
                <FaTrash
                  onClick={() => handleDelete(v.id)}
                  className="text-red-600 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
