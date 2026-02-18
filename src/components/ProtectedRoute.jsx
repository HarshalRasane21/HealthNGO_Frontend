import React from "react";
import { Navigate } from "react-router-dom";

{/* Protection function for adminpanel */}
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin-login" />;
  }

  return children;
};

export default ProtectedRoute;
