import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUs = () => {
  {
    /* Placeholder contact details */
  }
  const address = "Pune, Maharashtra";
  const phone = "+91 (123) 456 7890";
  const email = "ex@healthngo.org";
  const whatsappNumber = "+1234567890";
  const googleMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.86296739999999!3d18.52461645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1771011506010!5m2!1sen!2sin";

  return (
    <section className="bg-gray-50 py-12 mb-50">
      <div className="max-w-7xl mx-auto pt-10">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Contact Us
        </h2>

        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 mr-3" />
                <div>
                  <p className="text-gray-700 font-medium">Address</p>
                  <p className="text-gray-600">{address}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-3" />
                <div>
                  <p className="text-gray-700 font-medium">Phone</p>
                  <span className="text-gray-600">{phone}</span>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-3" />
                <div>
                  <p className="text-gray-700 font-medium">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="text-green-600 mr-3" />
                <div>
                  <p className="text-gray-700 font-medium">WhatsApp</p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    <FaWhatsapp className="mr-2" />
                    Message Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Location
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={googleMapUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
