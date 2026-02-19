import React from "react";
import RegistrationInfo from "./registrationInfo";
import AboutUs from "./aboutUs";
import aboutOrganization from "../assets/aboutO.jpg";

const About = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50 min-h-screen">
      {/* Background Image */}
      <div className="absolute w-full h-180">
        <img
          src={aboutOrganization}
          alt="About Organization"
          className=" w-full object-cover h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Hero Section */}
      <section className="relative  max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-50 sm:py-28 lg:py-32 text-center text-white ">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-orange-300">
            About Our Organization
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Dedicated to improving community health through awareness,
            accessible healthcare programs, and compassionate support.
          </p>
        </div>
      </section>

      <AboutUs />

      <RegistrationInfo />
    </div>
  );
};

export default About;
