import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
      <form id='register-info' className='log-reg-info'>
        <h1 id='register-title' className='heading-l log-reg-title'>
          Sign Up
        </h1>
        <input
          type='email'
          className='login-register-input'
          placeholder='Email address'
        />
        <input
          type='password'
          className='login-register-input'
          placeholder='Password'
        />
        <input
          type='password'
          className='login-register-input'
          placeholder='Repeat password'
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
