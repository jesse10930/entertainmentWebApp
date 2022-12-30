import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  REGISTER_SUCCESS,
  UPDATE_BOOKMARKS,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/auth');

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  // Register User
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/users', formData, config);

      // Why did this not work when it was in the authReducer???
      localStorage.setItem('token', res.data.token);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login User
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/auth', formData, config);

      // Why did this not work when it was in the authReducer???
      localStorage.setItem('token', res.data.token);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Logout
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  // Update user's bookmarks
  const updateBookmarks = async (clickedCategory, clickedTitle) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Delcare category variable for clicked content
    let newUser = state.user;
    const category = clickedCategory === 'Movie' ? 'movies' : 'series';

    if (newUser[category].includes(clickedTitle)) {
      let index = newUser[category].indexOf(clickedTitle);
      newUser[category].splice(index, 1);
    } else {
      newUser[category].push(clickedTitle);
    }

    try {
      // NEW USER GET PASSED IN WITH THE CORRECT INFO BUT RES.DATA HAS THE OLD USER'S INFO
      
      console.log(newUser);

      const res = await axios.put('/api/auth', newUser, config);

      console.log(res.data);

      dispatch({
        type: UPDATE_BOOKMARKS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
        clearErrors,
        loadUser,
        login,
        logout,
        updateBookmarks,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
