import axiosInstance from "./axiosInstance";

// GET events
export const getEvents = () => {
  return axiosInstance.get("/events");
};

// GET event by id 
export const getEventById = (id) => {
  return axiosInstance.get(`/events/${id}`);
};




