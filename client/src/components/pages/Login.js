import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Login = () => {
  // Declare and destructure global state
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  // Declare and destructure local state
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  // Declare navigation const
  const navigate = useNavigate();

  // useEffect hook fro navigating authenticated user and checking errors
  useEffect(() => {
    console.log('isAuth');
    if (isAuthenticated) {
      console.log('called');
      navigate('/', { replace: true });
    }

    if (
      error === 'Email not found' ||
      error === 'Password incorrect for entered email'
    ) {
      console.log(error);
      clearErrors();
    }
  }, [error, isAuthenticated]);

  // Called when user changes input
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Called on login submit
  const onLoginSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      console.log('email or password is blank');
      console.log(user);
    } else {
      login({ email, password });
    }
  };

  return (
    <div id='login-container' className='log-reg-container'>
      <div id='login-icon'>
        <svg width='33' height='27' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z'
            fill='#FC4747'
          />
        </svg>
      </div>
      <form id='login-info' className='log-reg-info' onSubmit={onLoginSubmit}>
        <h1 id='login-title' className='heading-l log-reg-title'>
          Login
        </h1>
        <input
          type='email'
          className='login-register-input'
          name='email'
          placeholder='Email address'
          id='login-email'
          onChange={onInputChange}
        />
        <input
          type='password'
          className='login-register-input'
          name='password'
          placeholder='Password'
          id='login-password'
          onChange={onInputChange}
        />
        <input
          type='submit'
          className='btn log-reg-btn'
          value='Login to your account'
        />
        <p id='no-account' className='body-m'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
