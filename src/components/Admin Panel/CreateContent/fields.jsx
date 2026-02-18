import React from "react";

{
  /* Input field Structure */
}
export const InputField = ({
  label,
  name,
  type = "text",
  handleChange,
  value,
}) => (
  <div>
    <label className="block mb-1 font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      required
    />
  </div>
);

{
  /* Text Field Structure */
}
export const TextareaField = ({ label, name, handleChange, value }) => (
  <div>
    <label className="block mb-1 font-medium text-gray-700">{label}</label>
    <textarea
      name={name}
      rows="4"
      value={value}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      required
    />
  </div>
);
