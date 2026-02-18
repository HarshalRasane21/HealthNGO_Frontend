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
    <div>
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Donation Records</h1>

      {/* table with fetch donation data */}
      <table className="w-full bg-white rounded-xl shadow border border-gray-400 border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4 border border-gray-400 px-4 py-2">Donor Name</th>
            <th className=" border border-gray-400 px-4 py-2">Email</th>
            <th className=" border border-gray-400 px-4 py-2">Amount</th>
            <th className=" border border-gray-400 px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping on fetch data */}
          {data.map((donation) => (
            <tr key={donation.id} className="border-t">
              <td className="p-4 border border-gray-400 px-4 py-2">
                {donation.user_name}
              </td>
              <td className=" border border-gray-400 px-4 py-2">
                {donation.user_email}
              </td>
              <td className="border text-green-600 font-semibold border-gray-400 px-4 py-2">
                $ {donation.amount}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {donation.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
