import axiosInstance from "./axiosInstance";

// GET events
export const getEvents = () => {
  return axiosInstance.get("/events");
};

// GET event by id 
export const getEventById = (id) => {
  return axiosInstance.get(`/events/${id}`);
};


// GET upcoming events as number
export const upcomingevents = () => {
  return axiosInstance.get("/events/upcomingevents");
};


// POST new event data
export const createEvent = (formData) => {
  return axiosInstance.post("/events", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// PUT edited event data
export const updateEvent = (id, formData) => {
  return axiosInstance.put(`/events/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// DELETE event by id
export const deleteEvent = (id) => {
  return axiosInstance.delete(`/events/${id}`);
};
