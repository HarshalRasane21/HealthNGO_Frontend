import axiosInstance from "./axiosInstance";

// GET all blogs
export const getBlogs = () => {
  return axiosInstance.get("/blogs");
};

// GET single blog
export const getBlogById = (id) => {
  return axiosInstance.get(`/blogs/${id}`);
};
