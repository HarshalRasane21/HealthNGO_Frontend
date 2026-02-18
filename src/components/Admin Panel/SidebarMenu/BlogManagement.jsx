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
    <div>
      <div className="flex justify-between items-center mb-6">
        {/* Title */}
        <h1 className="text-2xl font-bold">Manage Blogs</h1>

        {/* Create button */}
        <button
          onClick={() => setActiveType("blog")}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          <FaPlus /> Create Blog
        </button>
      </div>

      {/* table with fetch blog data */}
      <table className="w-full bg-white rounded-xl shadow border border-gray-400 border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4 border border-gray-400 px-4 py-2">Title</th>
            <th className="border border-gray-400 px-4 py-2">Category</th>
            <th className="border border-gray-400 px-4 py-2">Date</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping on fetch data */}
          {data.map((blog) => (
            <tr key={blog.id} className="border-t">
              <td className="p-4 border border-gray-400 px-4 py-2">
                {blog.title}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {blog.category}
              </td>
              <td className="border border-gray-400 px-4 py-2">{blog.date}</td>
              <td className="flex gap-3 p-4">
                {/* edit button */}
                <FaEdit
                  onClick={() => setEditItem(blog)}
                  className="text-blue-600 cursor-pointer"
                />

                {/* delete button */}
                <FaTrash
                  onClick={() => handleDelete(blog.id)}
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

      {/* edit form redirecting with there type */}
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
