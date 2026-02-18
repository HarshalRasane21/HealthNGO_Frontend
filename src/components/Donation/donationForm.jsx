import React, { useState } from "react";
import { createOrder, verifyPayment } from "../../api/paymentApi";
import { useParams } from "react-router-dom";

const DonationSection = () => {
  const { requestedAmount } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const amount = requestedAmount; // comes from request

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      {
        /*Create order from backend*/
      }
      const { data: order } = await createOrder({ amount });

      const options = {
        key: "rzp_test_SHFrAAmEONkwBR",
        key_secret: "tFBSeDQgvsM2Fw0B1eE5kHXT",
        amount: order.amount,
        currency: "INR",
        name: "Health NGO",
        description: "Donation",
        order_id: order.id,

        handler: async function (response) {
          {
            /*Verify payment*/
          }
          await verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            name: formData.name,
            email: formData.email,
            amount: amount,
          });

          alert("Donation Successful !");
        },

        prefill: {
          name: formData.name,
          email: formData.email,
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  };

  return (
    <section className="bg-gray-100 py-16 text-center">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>

        {/* Amount */}
        <p className="text-xl font-semibold text-blue-600 mb-6">
          Amount: ₹{amount}
        </p>

        {/* Form section for donare data*/}
        <form onSubmit={handlePayment} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
            className="w-full border px-4 py-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Donate ₹{amount}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonationSection;
