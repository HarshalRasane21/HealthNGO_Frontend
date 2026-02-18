import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaUserShield,
  FaUsers,
  FaStethoscope,
  FaCheck,
} from "react-icons/fa";

{
  /* amount default data */
}
const donationAmounts = [10, 25, 50, 100, 250, 500];

{
  /* Imapact Items Data */
}
const impactItems = [
  {
    icon: FaStethoscope,
    amount: "₹25",
    description: "Provides basic medical checkup for 5 children",
  },
  {
    icon: FaUserShield,
    amount: "₹50",
    description: "Supplies vaccines for an entire family",
  },
  {
    icon: FaUsers,
    amount: "₹100",
    description: "Funds a community health workshop",
  },
];

const Donatesection = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const activeAmount = customAmount ? Number(customAmount) : selectedAmount;

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-red-500 to-green-500" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-600">
            <FaHeart className="h-4 w-4" />
            Make a Difference Today
          </span>

          <h2 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl">
            Your Donation Saves Lives
          </h2>

          <p className="text-lg text-gray-600">
            Every contribution brings us closer to accessible healthcare for
            all.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Donation Card */}
          <div className=" text-center rounded-2xl border border-gray-200 bg-white p-8 shadow-md ">
            {/* Card Header */}
            <div className="mb-8 flex rounded-xl bg-gray-100 p-1">
              <div className="flex-1 rounded-lg py-2.5 font-semibold transition bg-blue-200 text-black text-gray-900 shadow-sm ">
                Donate
              </div>
            </div>

            {/* Amount Grid */}
            <div className="mb-6 grid grid-cols-3 gap-3">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`rounded-xl border-2 py-3 font-bold transition ${
                    selectedAmount === amount && !customAmount
                      ? "border-green-600 bg-green-50 text-green-600"
                      : "border-gray-200 hover:border-green-400 hover:bg-green-50"
                  }`}
                >
                  ₹{amount}
                </button>
              ))}
            </div>

            {/* Custom Amount Input Section*/}
            <div className="mb-8">
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="w-full rounded-xl border-2 border-gray-200 py-3 px-4 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
              />
            </div>

            {/* Donate Button */}
            <button
              onClick={() => navigate(`/donationForm/${activeAmount}`)}
              className="w-full rounded-xl bg-green-600 py-4 font-bold text-white shadow-lg transition hover:bg-green-700 active:scale-[0.98]"
            >
              <span className="flex items-center justify-center gap-2">
                <FaHeart />
                Donate {activeAmount ? `₹${activeAmount}` : ""}{" "}
              </span>
            </button>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <FaUserShield className="text-green-600" />
                SSL Secure
              </span>
              <span className="flex items-center gap-1">
                <FaCheck className="text-green-600" />
                Tax Deductible
              </span>
            </div>
          </div>

          {/* Impact Section */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-800">
              See Your Impact
            </h3>

            {/* Mapping on impact data */}
            <div className="space-y-4">
              {impactItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow hover:shadow-lg transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                    <item.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-red-500">
                      {item.amount}
                    </span>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donatesection;
