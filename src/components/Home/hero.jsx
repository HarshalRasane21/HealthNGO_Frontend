import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaArrowRight } from "react-icons/fa";
import heroBg from "../assets/ngo.jpg";
import ImpactSection from "./impactSection";
import AboutUs from "../About us/aboutUs";
import Donatesection from "../Donation/donatesection";

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden text-white pt-10">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroBg}
            alt="Community healthcare workers in rural India"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl ml-30 px-2 py-32 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Promoting Health.
            <br />
            <span className="text-orange-300">Empowering Lives.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
            We provide free health camps, mental health support, women & child
            healthcare programs, and awareness drives to build a healthier
            community.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/donate"
              className="bg-red-500 rounded-full border-2 inline-flex items-center justify-center gap-2 hover:bg-red-600 transition px-8 py-3 text-lg font-semibold shadow-lg"
            >
              <FaHeart className="h-4 w-4" />
              Donate Now
            </Link>

            <Link
              to="/volunteer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 font-body text-sm font-semibold text-white backdrop-blur transition-all hover:border-white"
            >
              Become a Volunteer
            </Link>

            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 font-body text-sm font-semibold text-white backdrop-blur transition-all hover:border-white hover:gap-3"
            >
              See Our Work
              <FaArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Numbers Section */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-300">5,000+</h2>
              <p className="mt-2">People Helped</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-orange-300">120+</h2>
              <p className="mt-2">Health Camps Conducted</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-orange-300">300+</h2>
              <p className="mt-2">Active Volunteers</p>
            </div>
          </div>
        </div>
      </section>
      <AboutUs />
      <ImpactSection />
      <Donatesection />
    </>
  );
};

export default Hero;
