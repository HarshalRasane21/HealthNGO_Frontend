import React from "react";

const RegistrationInfo = () => {
  return (
    <>
      {/* Registration & Legal Information */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Registration & Legal Information
          </h2>
          <div className="bg-green-50 rounded-2xl p-10 shadow-inner max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Registered under the NGO/Trust Act of India.
              <br />
              <span className="font-semibold">Registration Number:</span>{" "}
              NGO-2026-IND-001
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">PAN:</span> ABCDE1234F
              <br />
              <span className="font-semibold">Certifications:</span> 80G & 12A
              Certified
            </p>
          </div>
          <p className="mt-8 text-gray-600 italic">
            We are fully compliant and transparent in all our financial and
            operational practices.
          </p>
        </div>
      </section>
    </>
  );
};

export default RegistrationInfo;
