import { useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const location = useLocation();
  const [username, setUsername] = useState(localStorage.getItem("username"));
  return username ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
