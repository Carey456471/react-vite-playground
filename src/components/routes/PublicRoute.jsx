import React from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { useSelector } from 'react-redux';

function PublicRoute({ children }) {
  const auth = useSelector((state) => state.persist.authReducer.auth);

  if (auth) {
    return <Navigate to={routes.home} />;
  }
  return children;
}

export default PublicRoute;
