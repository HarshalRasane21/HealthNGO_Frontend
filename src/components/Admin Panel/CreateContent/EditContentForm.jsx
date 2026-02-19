import React, { useState } from "react";
import { InputField, TextareaField } from "./fields";

import { updateEvent } from "../../../api/eventApi";
import { updateBlog } from "../../../api/blogApi";
import { updateProgram } from "../../../api/programApi";

const EditContentForm = ({ type, existingData, onClose }) => {
  {
    /* useState for manage states */
  }
  const [formData, setFormData] = useState(() => existingData || {});
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(existingData?.image || null);




  {
    /* Handle form input data */
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
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
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
  <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-y-auto max-h-[95vh]">

    {/* Header */}
    <div className="px-6 py-4 border-b">
      <h2 className="text-xl sm:text-2xl font-bold capitalize">
        Edit {type}
      </h2>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="p-6 space-y-5">

      {/* Title */}
      <InputField
        label="Title"
        name="title"
        value={formData.title || ""}
        handleChange={handleChange}
      />

      {/* Blog Fields */}
      {type === "blog" && (
        <>
          <InputField
            label="Category"
            name="category"
            value={formData.category || ""}
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

      {/* Event Fields */}
      {type === "event" && (
        <>
          <InputField
            label="Event Date"
            name="event_date"
            type="date"
            value={formData.event_date?.slice(0, 10) || ""}
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

      {/* Program Field */}
      {type === "program" && (
        <TextareaField
          label="Description"
          name="description"
          value={formData.description || ""}
          handleChange={handleChange}
        />
      )}

      {/* Image Upload Section */}
      <div className="space-y-3">
        <label className="block font-medium text-gray-700">
          Replace Image (optional)
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {imagePreview && (
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Current Image Preview
            </p>
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-48 sm:h-56 object-cover rounded-lg shadow"
            />
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-4 border-t">

        <button
          type="button"
          onClick={onClose}
          className="w-full sm:w-auto px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
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
