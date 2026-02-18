import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBlog,
  FaCalendarAlt,
  FaHandsHelping,
  FaDonate,
  FaEnvelope,
  FaUser,
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

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-600 mb-10">NGO Admin</h2>

        {/* Sidebar Menu */}
        <nav className="space-y-4">
          <SidebarItem
            icon={<FaTachometerAlt />}
            label="Dashboard"
            tab="dashboard"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SidebarItem
            icon={<FaBlog />}
            label="Blogs"
            tab="blogs"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SidebarItem
            icon={<FaHandsHelping />}
            label="Programs"
            tab="programs"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SidebarItem
            icon={<FaCalendarAlt />}
            label="Events"
            tab="events"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SidebarItem
            icon={<FaDonate />}
            label="Donations"
            tab="donations"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SidebarItem
            icon={<FaEnvelope />}
            label="Newsletter"
            tab="newsletter"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SidebarItem
            icon={<FaUser />}
            label="Volunteer"
            tab="Volunteer"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </nav>
      </aside>

      {/* activetab data checking for toggling */}
      <main className="flex-1 p-10">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "blogs" && <BlogManagement />}
        {activeTab === "programs" && <ProgramManagement />}
        {activeTab === "events" && <EventManagement />}
        {activeTab === "donations" && <DonationSection />}
        {activeTab === "newsletter" && <NewsletterSection />}
        {activeTab === "Volunteer" && <VolunteerManagement />}
      </main>
    </div>
  );
};

export default AdminPanel;
