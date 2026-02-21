import React from "react";

const AboutUs = () => {
  return (
    <div className="relative bg-blue-100">
      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border-t-4 border-green-600">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To promote preventive healthcare, conduct free health camps,
              support mental health awareness, and provide essential medical
              services to underprivileged communities.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border-t-4 border-green-600">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To build a healthier society where every individual has access to
              quality healthcare, awareness resources, and emotional support —
              leaving no one behind.
            </p>
          </div>
        </div>
      </section>

      {/* Key Causes */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Key Causes
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-16">
            We address critical healthcare challenges through focused,
            community-driven initiatives designed to create sustainable and
            measurable impact.
          </p>

          {/* Card */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Cause 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 hover:-translate-y-2">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl font-bold">
                  01
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Preventive Healthcare
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Organizing free medical camps, early disease screenings,
                vaccination drives, and awareness programs to prevent illnesses
                before they escalate.
              </p>
            </div>

            {/* Cause 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-green-600 hover:-translate-y-2">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl font-bold">
                  02
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Maternal & Child Health
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Improving maternal care, child nutrition, immunization coverage,
                and school health initiatives to secure healthier futures for
                families.
              </p>
            </div>

            {/* Cause 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-600 hover:-translate-y-2">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl font-bold">
                  03
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Community Health Awareness
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Conducting workshops, mental health sessions, nutrition
                guidance, and lifestyle education to empower communities with
                health literacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {/* Team Member 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://png.pngtree.com/png-clipart/20240525/original/pngtree-lady-doctor-png-image_15170722.png"
                alt="Anjali"
                className="mx-auto rounded-full w-48 h-48 object-cover mb-6 border-4 border-green-100"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Dr. Anjali Sharma
              </h3>
              <p className="text-green-600 font-medium mt-2 text-lg">
                Chief Medical Officer
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQh9JYknXgf1q_QSSh5BGsPEdEaFuDZe2SQ&s"
                alt="rahul"
                className="mx-auto rounded-full w-48 h-48 object-cover mb-6 border-4 border-green-100"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Dr. Rahul Mehta
              </h3>
              <p className="text-green-600 font-medium mt-2 text-lg">
                Mental Health Specialist
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgqpo5JoBuN7Cim8eqglcnfH3IQ-ZLNieIEA&s"
                alt="priya"
                className="mx-auto rounded-full w-48 h-48 object-cover mb-6 border-4 border-green-100"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Priya Desai
              </h3>
              <p className="text-green-600 font-medium mt-2 text-lg">
                Program Coordinator
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
