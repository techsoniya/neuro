// Login.js

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from './Images/logo.png'; // Replace with the actual path to your logo

const Login = () => {
  const [loginType, setLoginType] = useState('employee');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login Type:', loginType);
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your authentication logic here

    // For demo purposes, show a success notification
    toast.success('User logged in successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
    // Add your forgot password logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src={logo} alt="Logo" />
          {/* <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2> */}
        </div>
        <form className="mt-8 space-y-6">
          <div className="flex justify-around mb-4">
            <button
              type="button"
              onClick={() => setLoginType('employee')}
              className={`${
                loginType === 'employee' ? 'bg-indigo-600' : 'bg-gray-300'
              } text-white py-2 px-4 rounded focus:outline-none`}
            >
              Employee
            </button>
            <button
              type="button"
              onClick={() => setLoginType('hr')}
              className={`${
                loginType === 'hr' ? 'bg-indigo-600' : 'bg-gray-300'
              } text-white py-2 px-4 rounded focus:outline-none`}
            >
              HR
            </button>
            <button
              type="button"
              onClick={() => setLoginType('admin')}
              className={`${
                loginType === 'admin' ? 'bg-indigo-600' : 'bg-gray-300'
              } text-white py-2 px-4 rounded focus:outline-none`}
            >
              Admin
            </button>
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <button
                onClick={handleForgotPassword}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;

