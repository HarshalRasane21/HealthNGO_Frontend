import React from "react";
import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import CreateContentForm from "../CreateContent/CreateContentForm";
import EditContentForm from "../CreateContent/EditContentForm";
import { getBlogs, deleteBlog } from "../../../api/blogApi";

export const BlogManagement = () => {
  {
    /* useStates for changing states */
  }
  const [editItem, setEditItem] = useState(null);
  const [activeType, setActiveType] = useState(null);
  const [data, setData] = useState([]);

  {
    /* fetching blogs data */
  }
  const fetchData = async () => {
    try {
      const res = await getBlogs();
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();

  {
    /* Handle delete blog */
  }
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await deleteBlog(id);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Manage Blogs</h1>

        <button
          onClick={() => setActiveType("blog")}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
        >
          <FaPlus /> Create Blog
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 border-b">Title</th>
              <th className="p-4 border-b">Category</th>
              <th className="p-4 border-b">Date</th>
              <th className="p-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((blog) => (
              <tr key={blog.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{blog.title}</td>
                <td className="p-4">{blog.category}</td>
                <td className="p-4">{blog.date}</td>
                <td className="p-4">
                  <div className="flex justify-center gap-4">
                    <FaEdit
                      onClick={() => setEditItem(blog)}
                      className="text-blue-600 cursor-pointer hover:scale-110 transition"
                    />
                    <FaTrash
                      onClick={() => handleDelete(blog.id)}
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
        {data.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow rounded-lg p-4 space-y-2"
          >
            <div>
              <p className="text-sm text-gray-500">Title</p>
              <p className="font-semibold">{blog.title}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Category</p>
              <p>{blog.category}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p>{blog.date}</p>
            </div>

            <div className="flex justify-end gap-4 pt-2">
              <FaEdit
                onClick={() => setEditItem(blog)}
                className="text-blue-600 cursor-pointer"
              />
              <FaTrash
                onClick={() => handleDelete(blog.id)}
                className="text-red-600 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Create Form Modal */}
      {activeType && (
        <CreateContentForm
          type={activeType}
          key={activeType}
          onClose={() => setActiveType(null)}
        />
      )}

      {/* Edit Form Modal */}
      {editItem && (
        <EditContentForm
          key={editItem.id}
          type="blog"
          existingData={editItem}
          onClose={() => setEditItem(null)}
        />
      )}
    </div>
  );
};
