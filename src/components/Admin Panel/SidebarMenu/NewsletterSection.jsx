import React, { useState } from "react";
import { getSubscribers } from "../../../api/newsletterApi";

export const NewsletterSection = () => {
  {
    /* useState for changing state */
  }
  const [data, setData] = useState([]);

  {
    /* fetching data */
  }
  const fetchData = async () => {
    try {
      const res = await getSubscribers();
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();

  return (
    <div className="w-full">
      {/* Header */}
      <h1 className="text-xl sm:text-2xl font-bold mb-6">
        Newsletter / Footer Submissions
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 border-b">Name</th>
              <th className="p-4 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((subscriber) => (
              <tr
                key={subscriber.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4">{subscriber.name}</td>
                <td className="p-4 break-all">{subscriber.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {data.map((subscriber) => (
          <div
            key={subscriber.id}
            className="bg-white shadow rounded-lg p-4 space-y-3"
          >
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-semibold">{subscriber.name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="break-all">{subscriber.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
