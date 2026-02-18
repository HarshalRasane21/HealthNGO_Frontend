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
    <div>
      <div className="flex justify-between items-center mb-6">
        {/* Title */}
        <h1 className="text-2xl font-bold">Manage Programs</h1>

        {/* create button */}
        <button
          onClick={() => setActiveType("program")}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          <FaPlus /> Create Program
        </button>
      </div>

      {/* table with fetch program data */}
      <table className="w-full bg-white rounded-xl shadow border border-gray-400 border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4 border border-gray-400 px-4 py-2">Title</th>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping on fetch data */}
          {data.map((program) => (
            <tr key={program.id} className="border-t">
              <td className="p-4 border border-gray-400 px-4 py-2">
                {program.title}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {program.description}
              </td>
              <td className="flex gap-3 p-4">
                {/* edit button */}
                <FaEdit
                  onClick={() => setEditItem(program)}
                  className="text-blue-600 cursor-pointer"
                />

                {/* Delete button */}
                <FaTrash
                  onClick={() => handleDelete(program.id)}
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
          type="program"
          existingData={editItem}
          onClose={() => setEditItem(null)}
        />
      )}
    </div>
  );
};
