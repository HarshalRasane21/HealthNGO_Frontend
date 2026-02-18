import axiosInstance from "./axiosInstance";


// GET donations
export const getDonations = () => {
  return axiosInstance.get("/donations");
};

// POST dontaion data
export const createDonation = (data) => {
  return axiosInstance.post("/donations", data);
};

// GET total donations as number
export const totaldonation = () => {
  return axiosInstance.get("donations/totaldonation");
}


