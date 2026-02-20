import axiosInstance from "./axiosInstance";


// GET programs
export const getPrograms = () => {
  return axiosInstance.get("/programs");
};


// GET program by id
export const getProgramById = (id) => {
  return axiosInstance.get(`/programs/${id}`);
};


