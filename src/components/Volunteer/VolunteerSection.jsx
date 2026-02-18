import React, { useState } from "react";
import { createVolunteer } from "../../api/volunteerApi";

const VolunteerSection = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});

  {
    /* Handle input field change data */
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  {
    /* Handle form submitting */
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createVolunteer(formData);
      alert("Thank you for volunteering!\nWe will inform you.");
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Section */}
      <section className="bg-blue-600 py-20 text-white text-center h-200">
        <div className="max-w-4xl mx-auto px-16 pt-50">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Become a Volunteer
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Join our mission to bring healthcare and hope to underserved
            communities. Your time and skills can make a real difference.
          </p>
          {/* Button to open popup volunteer form */}
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Join as Volunteer
          </button>
        </div>
      </section>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Volunteer Registration
            </h3>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-5 mb-10">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="full_name"
                  value={formData.full_name || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Skills"
                  name="skills"
                  value={formData.skills || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="availability"
                name="availability"
                value={formData.availability || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <textarea
                rows="4"
                placeholder="Why do you want to volunteer?"
                name="message"
                value={formData.message || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </form>

            {/* Roles & Responsibilities */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Roles & Responsibilities
              </h4>

              <ul className="space-y-3 text-gray-600 text-lg list-disc list-inside">
                <li>Assist in organizing health camps and awareness drives.</li>
                <li>
                  Support community outreach and beneficiary registration.
                </li>
                <li>
                  Help distribute medical supplies and educational materials.
                </li>
                <li>Document activities and assist in reporting impact.</li>
                <li>
                  Promote health awareness through digital and offline
                  campaigns.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VolunteerSection;
