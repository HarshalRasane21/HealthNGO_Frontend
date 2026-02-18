import React, { useState } from "react";
import { totaldonation } from "../../../api/donationApi";
import { totalblog } from "../../../api/blogApi";
import { upcomingevents } from "../../../api/eventApi";

export const Dashboard = () => {
  {
    /* useState for changing state */
  }
  const [data, setData] = useState("");
  const [blog, setblog] = useState("");
  const [event, setevent] = useState("");

  {
    /* fetching data */
  }
  const fetchData = async () => {
    try {
      const res = await totaldonation();
      setData(res.data[0].total);
      const res2 = await totalblog();
      setblog(res2.data[0].totalblogs);
      const res3 = await upcomingevents();
      setevent(res3.data[0].upcoming);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();

  return (
    <div>
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Total Donations" value={`${data}+`} color="green" />
        <Card title="Total Blogs" value={blog} color="blue" />
        <Card title="Upcoming Events" value={event} color="purple" />
      </div>
    </div>
  );
};

{
  /*Card creationg with props */
}
export const Card = ({ title, value, color }) => (
  <div className={`bg-${color}-100 p-6 rounded-xl shadow`}>
    <h3 className={`text-${color}-700 font-semibold mb-2`}>{title}</h3>
    <p className={`text-3xl font-bold text-${color}-900`}>{value}</p>
  </div>
);
