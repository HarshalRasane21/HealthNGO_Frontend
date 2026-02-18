import axiosInstance from "./axiosInstance";

// POST to create order for razorpay
export const createOrder = (data) =>
  axiosInstance.post("/payments/create-order", data);

//POST verify payment with donare data
export const verifyPayment = (data) =>
  axiosInstance.post("/payments/verify", data);
