import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import { IsLoginContext } from '../../contexts/IsLoginContext'
//защитить роуты /signup и /signin для зарегистрированных пользователей
function ProtectedRoutForReg({ component: Component, ...props }) {
  const isLogin = useContext(IsLoginContext);
  React.useEffect(() => {

  }, [])
  
  return (
    isLogin ? <Navigate to="/profile" /> : <Component {...props} /> 
  );
};
export default ProtectedRoutForReg;
