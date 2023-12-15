import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
  const auth = useSelector((state) => state.persist.authReducer.auth);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={routes.login} replace state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
