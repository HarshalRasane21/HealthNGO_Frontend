import axiosInstance from "./axiosInstance";


// GET programs
export const getPrograms = () => {
  return axiosInstance.get("/programs");
};


// GET program by id
export const getProgramById = (id) => {
  return axiosInstance.get(`/programs/${id}`);
};


// POST new program data
export const createProgram = (formData) => {
  return axiosInstance.post("/programs", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};


// PUT edited data
export const updateProgram = (id, formData) => {
  return axiosInstance.put(`/programs/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};


// DELETE program by id
export const deleteProgram = (id) => {
  return axiosInstance.delete(`/programs/${id}`);
};
