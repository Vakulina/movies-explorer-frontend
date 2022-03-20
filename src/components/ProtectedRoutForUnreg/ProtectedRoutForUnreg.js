import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import { IsLoginContext } from '../../contexts/IsLoginContext'
//защитить роуты /signup и /signin для зарегистрированных пользователей
function ProtectedRoutForUnreg({ component: Component, ...props }) {
  const isLogin = useContext(IsLoginContext);
  return (
    isLogin ? <Navigate to="/profile" /> : <Component {...props} /> 
  );
};
export default ProtectedRoutForUnreg;
