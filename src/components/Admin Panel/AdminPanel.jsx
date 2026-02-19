import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBlog,
  FaCalendarAlt,
  FaHandsHelping,
  FaDonate,
  FaEnvelope,
  FaUser,
  FaTimes, 
  FaBars
} from "react-icons/fa";
import { SidebarItem } from "./SidebarItem";
import { Dashboard } from "./SidebarMenu/Dashboard";
import { BlogManagement } from "./SidebarMenu/BlogManagement";
import { ProgramManagement } from "./SidebarMenu/ProgramManagement";
import { EventManagement } from "./SidebarMenu/EventManagement";
import { DonationSection } from "./SidebarMenu/DonationSection";
import { NewsletterSection } from "./SidebarMenu/NewsletterSection";
import { VolunteerManagement } from "./SidebarMenu/VolunteerManagement";

const AdminPanel = () => {
  {
    /* useState for changing state */
  }
  const [activeTab, setActiveTab] = useState("dashboard");


  const [isOpen, setIsOpen] = useState(false);



  return (
     <div className="flex min-h-screen bg-gray-100 relative">

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Close Button Mobile */}
        <div className="flex justify-between items-center mb-8 md:hidden">
          <h2 className="text-xl font-bold text-blue-600">NGO Admin</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Desktop Heading */}
        <h2 className="hidden md:block text-2xl font-bold text-blue-600 mb-10">
          NGO Admin
        </h2>

        <nav className="space-y-4">
          <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" tab="dashboard" activeTab={activeTab} setActiveTab={setActiveTab} closeSidebar={() => setIsOpen(false)} />
          <SidebarItem icon={<FaBlog />} label="Blogs" tab="blogs" activeTab={activeTab} setActiveTab={setActiveTab} closeSidebar={() => setIsOpen(false)} />
          <SidebarItem icon={<FaHandsHelping />} label="Programs" tab="programs" activeTab={activeTab} setActiveTab={setActiveTab} closeSidebar={() => setIsOpen(false)} />
          <SidebarItem icon={<FaCalendarAlt />} label="Events" tab="events" activeTab={activeTab} setActiveTab={setActiveTab} closeSidebar={() => setIsOpen(false)} />
          <SidebarItem icon={<FaDonate />} label="Donations" tab="donations" activeTab={activeTab} setActiveTab={setActiveTab} closeSidebar={() => setIsOpen(false)} />
          <SidebarItem icon={<FaEnvelope />} label="Newsletter" tab="newsletter" activeTab={activeTab} setActiveTab={setActiveTab} closeSidebar={() => setIsOpen(false)} />
          <SidebarItem icon={<FaUser />} label="Volunteer" tab="Volunteer" activeTab={activeTab} setActiveTab={setActiveTab} closeSidebar={() => setIsOpen(false)} />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between bg-white shadow px-6 py-4">
          <button onClick={() => setIsOpen(true)}>
            <FaBars className="text-xl" />
          </button>
          <h1 className="text-lg font-semibold text-blue-600">NGO Admin</h1>
        </div>

        <main className="flex-1 p-6 md:p-10">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "blogs" && <BlogManagement />}
          {activeTab === "programs" && <ProgramManagement />}
          {activeTab === "events" && <EventManagement />}
          {activeTab === "donations" && <DonationSection />}
          {activeTab === "newsletter" && <NewsletterSection />}
          {activeTab === "Volunteer" && <VolunteerManagement />}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
