import React from "react";
import DonateSection from "./donatesection";
import heroDonateImg from "../assets/hero-donate.jpg";
import { FaHeart, FaArrowDown } from "react-icons/fa";

const Donate = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero bg */}
      <header className="relative h-[100vh] min-h-[480px] overflow-hidden">
        <img
          src={heroDonateImg}
          alt="Healthcare worker helping a child"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        {/* Hero Text */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <FaHeart className="h-4 w-4 text-red-400" /> HealthBridge Foundation
          </span>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Healthcare for Every Child, Everywhere
          </h1>

          <p className="mt-4 max-w-xl text-lg text-gray-200">
            We deliver essential medical care to underserved communities across
            the globe.
          </p>

          {/* Donate card redirect button */}
          <a
            href="#donate"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3.5 font-bold text-white shadow-lg transition hover:bg-green-700 hover:shadow-xl active:scale-[0.97]"
          >
            Donate Now <FaArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </header>

      <div id="donate">
        <DonateSection />
      </div>
    </div>
  );
};

export default Donate;
