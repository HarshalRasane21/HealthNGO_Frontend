import React, { useState } from "react";
import { InputField, TextareaField } from "./fields";
import { FaCamera } from "react-icons/fa";
import { createEvent } from "../../../api/eventApi";
import { createBlog } from "../../../api/blogApi";
import { createProgram } from "../../../api/programApi";

const CreateContentForm = ({ type, onClose }) => {
  {
    /* useStates for handling state */
  }
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  {
    /* handle the input data */
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  {
    /* handle the form submit */
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    {
      /*Create new FormData object*/
    }
    const data = new FormData();

    {
      /* Appending the key to FormData object */
    }
    Object.keys(formData).forEach((key) => {
      console.log("Appending:", key, formData[key]);
      data.append(key, formData[key]);
    });

    {
      /* Appending the image to FormData object if insert */
    }
    if (imageFile) {
      console.log("Appending image");
      data.append("image", imageFile);
    }

    try {
      console.log("Sending API request...");

      {
        /* Checking the which type is come through props for creating of particular type  */
      }
      if (type === "program") {
        await createProgram(data);
      } else if (type === "event") {
        await createEvent(data);
      } else if (type === "blog") {
        await createBlog(data);
      }
      alert("Created Successfully");
      onClose();
    } catch (err) {
      console.error("Create Error:", err.response?.data || err.message);
    }
  };

  {
    /*Handle Image Upload*/
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-6 capitalize">Create {type}</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <InputField
            label="Title"
            name="title"
            value={formData.title || ""}
            handleChange={handleChange}
          />

          {/* Blog input field*/}
          {type === "blog" && (
            <>
              <InputField
                label="Category"
                name="category"
                value={formData.category || ""}
                handleChange={handleChange}
              />
              <InputField
                label="Author Name"
                name="author"
                type="name"
                value={formData.author || ""}
                handleChange={handleChange}
              />
              <TextareaField
                label="Content"
                name="content"
                value={formData.content || ""}
                handleChange={handleChange}
              />
            </>
          )}

          {/* Event input field*/}
          {type === "event" && (
            <>
              <InputField
                label="Event Date"
                name="event_date"
                type="date"
                value={formData.event_date || ""}
                handleChange={handleChange}
              />
              <InputField
                label="Location"
                name="location"
                value={formData.location || ""}
                handleChange={handleChange}
              />
              <TextareaField
                label="Description"
                name="description"
                value={formData.description || ""}
                handleChange={handleChange}
              />
            </>
          )}

          {/* Program input field  */}
          {type === "program" && (
            <>
              <TextareaField
                label="Description"
                name="description"
                value={formData.description || ""}
                handleChange={handleChange}
              />
            </>
          )}

          {/* Image Upload Section */}
          <div className="flex ">
            <label className="block mb-2 font-medium text-gray-700">
              Upload Image
            </label>
            <div className="relative w-full">
              <FaCamera className="absolute left-3 mt-5 -translate-y-1/2 text-gray-500" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2"
                required
              />
            </div>
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Image Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-56 object-cover rounded-lg shadow"
                />
              </div>
            )}
          </div>

          {/* cancel button */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="submit"
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-gray-300"
            >
              Cancel
            </button>

            {/* save button */}
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Save {type}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContentForm;
