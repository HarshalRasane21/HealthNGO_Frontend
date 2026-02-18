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
    <div>
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">
        Newsletter / Footer Submissions
      </h1>

      {/* Table with fetch data */}
      <table className="w-full bg-white rounded-xl shadow border border-gray-400 border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4 border border-gray-400 px-4 py-2">Name</th>
            <th className=" border border-gray-400 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping on fetch data */}
          {data.map((subscriber) => (
            <tr key={subscriber.id} className="border-t">
              <td className="p-4 border border-gray-400 px-4 py-2">
                {subscriber.name}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {subscriber.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
