import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return <Loading />;
  }
  if (currentUser) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
