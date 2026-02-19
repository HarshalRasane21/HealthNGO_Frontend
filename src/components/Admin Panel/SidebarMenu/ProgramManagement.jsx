import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import CreateContentForm from "../CreateContent/CreateContentForm";
import EditContentForm from "../CreateContent/EditContentForm";
import { getPrograms, deleteProgram } from "../../../api/programApi";

export const ProgramManagement = () => {
  {
    /* useState for changing state */
  }
  const [activeType, setActiveType] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [data, setData] = useState([]);

  {
    /* fetching data */
  }
  const fetchData = async () => {
    try {
      const res = await getPrograms();
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();

  {
    /* Handle delete button functionality */
  }
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await deleteProgram(id);
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
        <h1 className="text-xl sm:text-2xl font-bold">Manage Programs</h1>

        <button
          onClick={() => setActiveType("program")}
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition w-full sm:w-auto"
        >
          <FaPlus />
          Create Program
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 border-b">Title</th>
              <th className="p-4 border-b">Description</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((program) => (
              <tr
                key={program.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">{program.title}</td>

                <td className="p-4 max-w-md truncate">{program.description}</td>

                <td className="p-4">
                  <div className="flex gap-4">
                    <FaEdit
                      onClick={() => setEditItem(program)}
                      className="text-blue-600 cursor-pointer hover:scale-110 transition"
                    />
                    <FaTrash
                      onClick={() => handleDelete(program.id)}
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
        {data.map((program) => (
          <div
            key={program.id}
            className="bg-white shadow rounded-lg p-4 space-y-3"
          >
            <div>
              <p className="text-sm text-gray-500">Title</p>
              <p className="font-semibold">{program.title}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Description</p>
              <p className="text-gray-700">{program.description}</p>
            </div>

            <div className="flex justify-end gap-4 pt-2">
              <FaEdit
                onClick={() => setEditItem(program)}
                className="text-blue-600 cursor-pointer text-lg"
              />
              <FaTrash
                onClick={() => handleDelete(program.id)}
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
          type="program"
          existingData={editItem}
          onClose={() => setEditItem(null)}
        />
      )}
    </div>
  );
};
