import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../components/images/logo.png';

function Signin() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/Home');
  };

  return (
    <div>
      <div className='h-screen flex items-center justify-center'>
        <div className='ml-auto hidden lg:block'>
          <h1 className='text-5xl font-bold my-2 '>Share <span className='text-green-500'>Message</span></h1>
          <h3 className='text-5xl font-bold '>With ChatBox</h3>
          <img src={logo} alt="" className='my-4 h-16' />
        </div>
        <form
          className='flex flex-col justify-center border shadow-xl rounded-md p-9 lg:ml-auto lg:mr-48'
          onSubmit={handleSubmit}
        >
          <input
            className="input-box text-neutral-700 text-base font-normal w-72 py-2"
            placeholder='Email Address'
            type="email"
            id="email"
            name="email"
            required
          />
          <input
            className="input-box text-neutral-700 text-base font-normal w-72 py-2"
            placeholder='Password'
            type="password"
            id="password"
            name="password"
            required
          />
          <div className="signup-button w-72 h-11 rounded-lg text-center leading-10 mt-10 mb-8 bg-blue-600">
            <button type="submit" className="w-36 text-white font-extrabold ">
              Sign In
            </button>
          </div>
          <div className='ml-auto'>
            <span className="text-black text-sm font-bold">New User? </span>
            <Link to='/Signup' className="text-blue-600 text-sm font-bold">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
