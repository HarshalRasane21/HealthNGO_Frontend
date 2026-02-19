import React, { useState } from "react";
import { motion } from "framer-motion";
import ProgramCard from "./programcard";
import { getPrograms } from "../../api/programApi";

const Programs = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getPrograms();
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-28">
      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-blue-600">
            What We Do
          </span>

          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Our Programmes
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We work holistically with vulnerable communities to create lasting
            impact.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        </motion.div>

        {/* Mapping on programs */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((program, index) => (
            <ProgramCard key={program.title} {...program} index={index} />
          ))}
        </div>
      </div>

      {/* Progress stats */}
      <div className="container relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 gap-6 rounded-2xl bg-blue-50 p-8 md:grid-cols-4 md:p-12"
        >
          {[
            { value: "1,87,839", label: "Mothers Assisted" },
            { value: "89,604", label: "Children Screened" },
            { value: "80,000+", label: "Students Uplifted" },
            { value: "15+", label: "States Covered" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-blue-600 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
