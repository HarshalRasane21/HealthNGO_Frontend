import axiosInstance from "./axiosInstance";


// CREATE Volunteer
export const createVolunteer = (data) => {
  return axiosInstance.post("/volunteers", data);
};
