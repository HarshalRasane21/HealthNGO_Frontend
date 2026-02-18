import React from "react";
import {
  FaArrowUp,
  FaUsers,
  FaMapPin,
  FaStethoscope,
  FaBaby,
  FaPhone,
} from "react-icons/fa";

const stats = [
  { icon: FaUsers, value: "2,00,000+", label: "Lives Touched Annually" },
  { icon: FaMapPin, value: "12", label: "States in India" },
  { icon: FaStethoscope, value: "350+", label: "Health Centres" },
  { icon: FaBaby, value: "85,000+", label: "Safe Deliveries" },
  { icon: FaPhone, value: "1,50,000+", label: "Helpline Calls Answered" },
  { icon: FaArrowUp, value: "2,500+", label: "Community Health Workers" },
];

const ImpactSection = () => {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-gray-900 py-16 md:py-24"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_50%,#22c55e,transparent_70%)]" />
      </div>

      {/* Impactsection Heading */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-green-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-400">
            Our Impact
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Numbers That Tell Our <span className="text-yellow-400">Story</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300">
            Every number represents a life changed, a family strengthened, and a
            community empowered.
          </p>
        </div>

        {/* mapping on stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="group rounded-lg border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition-all hover:border-green-400/40 hover:bg-green-500/10"
            >
              <Icon className="mx-auto h-8 w-8 text-yellow-400" />

              <p className="mt-3 text-3xl font-bold text-white md:text-4xl">
                {value}
              </p>

              <p className="mt-1 text-sm text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
