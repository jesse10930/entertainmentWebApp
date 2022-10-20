import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // declare and destructure global state
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading, token } = authContext;

  // const auth = !isAuthenticated ? false : true;

  // Not sure if using token directly here is OK, gotta look into that.
  const auth = isAuthenticated || token ? true : false;

  // No idea if ths is proper, passing in the actual component but find out!
  return auth ? <Home /> : <Navigate to='/login' />;
};

export default PrivateRoute;
