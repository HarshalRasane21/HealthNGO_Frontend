import axiosInstance from "./axiosInstance";


// CREATE Volunteer
export const createVolunteer = (data) => {
  return axiosInstance.post("/volunteers", data);
};

// GET All Volunteers (Admin)
export const getVolunteers = () => {
  return axiosInstance.get("/volunteers");
};

// DELETE Volunteer
export const deleteVolunteer = (id) => {
  return axiosInstance.delete(`/volunteers/${id}`);
};
