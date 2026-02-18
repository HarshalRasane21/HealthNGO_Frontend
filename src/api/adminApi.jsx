import axiosInstance from "./axiosInstance";

// POST login data 
export const loginAdmin = (data) => {
  return axiosInstance.post("/admin/login", data);
};

// GET admin dashboard
export const getAdminDashboard = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const response = await axiosInstance.get("/admin/dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};