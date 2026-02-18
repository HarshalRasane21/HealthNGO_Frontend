import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./MainLayout";

import Hero from "./components/Home/hero";
import About from "./components/About us/about";
import Programs from "./components/Our Programs/programs";
import Blog from "./components/Blog/blog";
import Event from "./components/Event/event";
import Donate from "./components/Donation/donate";
import VolunteerSection from "./components/Volunteer/VolunteerSection";
import ContactUs from "./components/Contact us/contactUs";
import DetailsPage from "./components/Details/DetailsPage";
import AllArticles from "./components/Blog/AllArticles";
import DonationForm from "./components/Donation/donationForm";
import AdminLogin from "./components/Admin Panel/AdminLogin/login";
import AdminPanel from "./components/Admin Panel/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Header & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/events" element={<Event />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<VolunteerSection />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/details/:type/:id" element={<DetailsPage />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route
            path="/donationForm/:requestedAmount"
            element={<DonationForm />}
          />
        </Route>

        {/* Routes without header and footer */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Route with Protection Layer only authorize person can access*/}
        <Route
          path="/AdminPanel"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
