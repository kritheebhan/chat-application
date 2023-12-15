import React from 'react'
import { useNavigate } from 'react-router-dom';


import man from '../components/images/man.png'
import logo from '../components/images/logo.png'
import out from '../components/images/sign-out.png'
import send from '../components/images/send.png'

function Home() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };
  return (
    <div>
      <div className='grid grid-cols-4 '>
        <div className='row-span-1 border border-gray-200 h-screen'>
        <form onSubmit={handleSubmit}>
            <div className='flex my-6 ml-6'>
              <img src={man} alt="" className='h-10' />
              <h2 className='mt-2 ml-4 font-bold'>Kritheebhan</h2>
              <button type="submit" className='mt-1 ml-auto mx-4'>
                <img src={out} alt="" className='h-5' />
              </button>
            </div>
          </form>
          <div className='flex justify-center mb-3 '>
            <input className='input-box rounded-3xl w-80 px-5 py-2 '
            type="search"
            placeholder="Search..."
            />
          </div>
          <div>
            <h2 className='mx-6 text-xl font-bold text-blue-500 my-3'>Chats...</h2>
            <div className='flex border border-gray-300 p-4'>
              <img src={man} alt="" className='h-9'/>
              <h2 className='mt-2 ml-4 font-bold'>Krithee</h2>
            </div>
            <div className='flex  border border-gray-300 p-4'>
              <img src={man} alt="" className='h-9'/>
              <h2 className='mt-2 ml-4 font-bold'>Krithee</h2>
            </div>
            <div className='flex  border border-gray-300 p-4'>
              <img src={man} alt="" className='h-9'/>
              <h2 className='mt-2 ml-4 font-bold'>Krithee</h2>
            </div>
          </div>
        </div>
        <div className='col-span-3'>
          <div className='py-4 px-4 border border-gray-300 '>
            <div className='flex'>
              <img src={man} alt="" className='h-12'/>
              <h2 className='mt-2 ml-4 font-bold'>Krithee</h2>
              <img src={logo} alt="" className='h-12 ml-auto'/>
            </div>
          </div>
          <div>
          <div className='flex'>
  <div className="relative w-full m-1">
    <input
      className='message w-full rounded-md pl-10 py-4' // Added padding for the icon
      type="text"
      placeholder="Type a message"
    />
    <button className="absolute inset-y-0 right-0 flex items-center">
      <img src={send} alt="" className='send h-7 mx-3 mb-6' />
    </button>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home