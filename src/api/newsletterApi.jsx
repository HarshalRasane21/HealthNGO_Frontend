import axiosInstance from "./axiosInstance";



// POST new newsletter data
export const subscribeNewsletter = (data) => {
  return axiosInstance.post("/newsletter", data);
};


