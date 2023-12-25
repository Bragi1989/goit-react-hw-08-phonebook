import { LOGIN_ROUTE } from 'constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import React from 'react';
import { selectAuthenticated } from 'redux/auth/selectors';

const PrivetRoute = ({ children, navigateTo = LOGIN_ROUTE }) => {
  const authenticated = useSelector(selectAuthenticated);
  return authenticated ? children : <Navigate to={navigateTo} replace />;
};

export default PrivetRoute;

