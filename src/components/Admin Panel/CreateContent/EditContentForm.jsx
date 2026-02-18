import React, { useState } from "react";
import { InputField, TextareaField } from "./fields";

import { updateEvent } from "../../../api/eventApi";
import { updateBlog } from "../../../api/blogApi";
import { updateProgram } from "../../../api/programApi";

const EditContentForm = ({ type, existingData, onClose }) => {
  {
    /* useState for manage states */
  }
  const [formData, setFormData] = useState(existingData || {});
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(existingData?.image || null);

  {
    /* Handle form input data */
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  {
    /*Handle Image data */
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  {
    /* Handle Edit Form Data  */
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    {
      /* Creating new object for formdata */
    }
    const formData = new FormData();

    {
      /* inserting key into object */
    }
    Object.keys(formData).forEach((key) => formData.append(key, formData[key]));

    {
      /* append image to object if upload */
    }
    if (imageFile) formData.append("image", imageFile);

    try {
      if (existingData) {
        {
          /* Checking the which type is come through props for Editing of particular type  */
        }
        if (type === "program") {
          await updateProgram(existingData.id, formData);
        } else if (type === "event") {
          await updateEvent(existingData.id, formData);
        } else if (type === "blog") {
          await updateBlog(existingData.id, formData);
        }
        alert("Updated Successfully");
      } else {
        alert("Error in Updation");
      }
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-xl overflow-y-auto max-h-[90vh]">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 capitalize">Edit {type}</h2>

        {/* Form for editing data */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <InputField
            label="Title"
            name="title"
            value={existingData.title || ""}
            handleChange={handleChange}
          />

          {/* Blog input field*/}
          {type === "blog" && (
            <>
              <InputField
                label="Category"
                name="category"
                value={existingData.category || ""}
                handleChange={handleChange}
              />
              <TextareaField
                label="Content"
                name="content"
                value={existingData.content || ""}
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
                value={existingData.event_date?.slice(0, 10) || ""}
                handleChange={handleChange}
              />
              <InputField
                label="Location"
                name="location"
                value={existingData.location || ""}
                handleChange={handleChange}
              />
              <TextareaField
                label="Description"
                name="description"
                value={existingData.description || ""}
                handleChange={handleChange}
              />
            </>
          )}

          {/* Program input field */}
          {type === "program" && (
            <TextareaField
              label="Description"
              name="description"
              value={existingData.description || ""}
              handleChange={handleChange}
            />
          )}

          {/* Image Upload */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Replace Image (optional)
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />

            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Current Image:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-56 object-cover rounded-lg shadow"
                />
              </div>
            )}
          </div>

          {/* Buttons to update and cancel */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Update {type}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContentForm;
