import axiosInstance from "./axiosInstance";


// POST dontaion data
export const createDonation = (data) => {
  return axiosInstance.post("/donations", data);
};


