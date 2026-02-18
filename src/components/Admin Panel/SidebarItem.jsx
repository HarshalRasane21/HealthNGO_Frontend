import React from "react";

{
  /* Sidebar Design and responsiveness */
}
export const SidebarItem = ({ icon, label, tab, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(tab)}
    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition ${
      activeTab === tab
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    {icon}
    {label}
  </button>
);
