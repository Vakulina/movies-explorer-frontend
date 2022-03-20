import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import { IsLoginContext } from '../../contexts/IsLoginContext'

function ProtectedRoute({ component: Component, ...props }) {
  const isLogin = useContext(IsLoginContext);
  return (
    isLogin ? <Component {...props} /> : <Navigate to="/signin" />
  );
};
export default ProtectedRoute;
