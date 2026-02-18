import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { subscribeNewsletter } from "../../api/newsletterApi";

const Footer = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await subscribeNewsletter(formData);
      alert("Thank you for Connecting!");
      setFormData("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Name + About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Health NGO</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Promoting health, empowering lives through awareness, care,
            community outreach, and sustainable impact.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-white text-lg">
            <a href="#">
              <FaFacebookF className="hover:text-green-400 transition" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-green-400 transition" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-green-400 transition" />
            </a>
            <a href="#">
              <FaLinkedinIn className="hover:text-green-400 transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-green-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/programs" className="hover:text-green-400 transition">
                Our Programs
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-green-400 transition">
                Events
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-green-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-sm space-y-2">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-400" /> Pune, Maharashtra,
            India
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-green-400" /> +91 1234567890
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-green-400" /> ex@healthngo.org
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Stay updated with latest health news, programs and events.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="name"
              placeholder="Enter Name"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="px-3 py-2 rounded bg-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="px-3 py-2 rounded bg-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 text-center text-sm py-4 text-gray-400">
        © 2026 Health NGO. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
