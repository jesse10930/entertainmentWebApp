import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
  // Declare and destructure global state
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  // Delcare and destructure local state
  const [user, setUser] = useState({
    email: '',
    password: '',
    password2: '',
  });
  const { email, password, password2 } = user;

  // Declare navigation const
  const navigate = useNavigate();

  // useEffect hook for navigating authenticated user and checking errors
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }

    if (error === 'Email already exists') {
      console.log(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  // Called when user changes input
  const onInputChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  // On registration submit
  const onRegisterSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '' || password2 === '') {
      console.log('emial or passord or password2 blank');
    } else if (password !== password2) {
      console.log('passwords do not match');
    } else {
      register({ email, password });
    }
  };

  return (
    <div id='register-container' className='log-reg-container'>
      <div id='register-icon'>
        <svg width='33' height='27' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z'
            fill='#FC4747'
          />
        </svg>
      </div>
      <form
        id='register-info'
        className='log-reg-info'
        onSubmit={onRegisterSubmit}
      >
        <h1 id='register-title' className='heading-l log-reg-title'>
          Sign Up
        </h1>
        <input
          type='email'
          className='login-register-input'
          placeholder='Email address'
          name='email'
          onChange={onInputChange}
        />
        <input
          type='password'
          className='login-register-input'
          name='password'
          placeholder='Password'
          onChange={onInputChange}
        />
        <input
          type='password'
          name='password2'
          className='login-register-input'
          placeholder='Repeat password'
          onChange={onInputChange}
        />
        <input
          type='submit'
          className='btn log-reg-btn'
          value='Create an account'
        />
        <p id='has-account' className='body-m'>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
