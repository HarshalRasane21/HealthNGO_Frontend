import React, { useState } from "react";

import { getDonations } from "../../../api/donationApi";

export const DonationSection = () => {
  {
    /* useState for changing state */
  }
  const [data, setData] = useState([]);

  {
    /* fetching data */
  }
  const fetchData = async () => {
    try {
      const res = await getDonations();
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();

  return (
    <div className="w-full">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Donation Records</h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 border-b">Donor Name</th>
              <th className="p-4 border-b">Email</th>
              <th className="p-4 border-b">Amount</th>
              <th className="p-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((donation) => (
              <tr
                key={donation.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4">{donation.user_name}</td>
                <td className="p-4">{donation.user_email}</td>
                <td className="p-4 text-green-600 font-semibold">
                  $ {donation.amount}
                </td>
                <td className="p-4">{donation.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {data.map((donation) => (
          <div
            key={donation.id}
            className="bg-white shadow rounded-lg p-4 space-y-3"
          >
            <div>
              <p className="text-sm text-gray-500">Donor Name</p>
              <p className="font-semibold">{donation.user_name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="break-all">{donation.user_email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Amount</p>
              <p className="text-green-600 font-semibold text-lg">
                $ {donation.amount}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p>{donation.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
