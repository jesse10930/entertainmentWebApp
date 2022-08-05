import React from 'react';

const Login = () => {
  return (
    <div id='login-container'>
      <div id='login-icon'>
        <svg width='33' height='27' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z'
            fill='#FC4747'
          />
        </svg>
      </div>
      <form id='login-info'>
        <h1 id='login-title' className='heading-l'>
          Login
        </h1>
        <input
          type='email'
          className='login-input'
          placeholder='Email address'
        />
        <input type='password' className='login-input' placeholder='Password' />
        <input type='submit' className='btn' value='Login to your account' />
        <p id='no-account' className='body-m'>
          Don't have an account?{' '}
          <a href='?' id='sign-up-link'>
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
