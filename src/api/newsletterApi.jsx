import axiosInstance from "./axiosInstance";

// GET newsletter data
export const getSubscribers = () => {
  return axiosInstance.get("/newsletter");
};


// POST new newsletter data
export const subscribeNewsletter = (data) => {
  return axiosInstance.post("/newsletter", data);
};


