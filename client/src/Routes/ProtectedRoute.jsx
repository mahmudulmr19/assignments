import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Loader } from "../Components";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { currentUser, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }

  if (currentUser) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default ProtectedRoute;
