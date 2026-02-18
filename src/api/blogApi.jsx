import axiosInstance from "./axiosInstance";

// GET all blogs
export const getBlogs = () => {
  return axiosInstance.get("/blogs");
};

// GET single blog
export const getBlogById = (id) => {
  return axiosInstance.get(`/blogs/${id}`);
};

// CREATE blog with image
export const createBlog = (formData) => {
  return axiosInstance.post("/blogs", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// UPDATE blog
export const updateBlog = (id, formData) => {
  return axiosInstance.put(`/blogs/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// DELETE blog
export const deleteBlog = (id) => {
  return axiosInstance.delete(`/blogs/${id}`);
};

//GET total blog as number
export const totalblog = () => {
  return axiosInstance.get("blogs/totalblogs");
}
