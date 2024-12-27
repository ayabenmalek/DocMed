import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from '../photos/Logo.png'

import { useNavigate } from 'react-router-dom';

export default function Navuser() {

  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate(); // Hook to get navigate function

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get('/api/auth/status'); // Update with your actual endpoint
        setIsConnected(response.data.isAuthenticated); // Assuming response.data.isAuthenticated is the auth status
      } catch (error) {
        console.error("Error checking authentication status:", error);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-2 bg-cwhite text-white shadow-lg">
    <img 
      src={Logo}
      alt="logo" 
      className="w-20 h-20 ml-4"
      onClick={() => navigate('/')} // Navigate to Home when the logo is clicked
    />
    <ul className="flex space-x-8 text-cblue">
      <li><button onClick={() => navigate('/')} className='hover:text-cbluef'>Home</button></li>
      <li><button onClick={() => navigate('/theses')} className='hover:text-cbluef'>Thèses</button></li>
      <li><button onClick={() => navigate('/articles')} className='hover:text-cbluef'>Articles</button></li>
      <li><button onClick={() => navigate('/courses')} className='hover:text-cbluef'>Courses</button></li>
      <li><button onClick={() => navigate('/aboutus')} className='hover:text-cbluef'>About Us</button></li> 
    </ul>
    <div>
      {isConnected ? (
        <button 
          onClick={() => navigate('/account')} 
          className="flex items-center text-l text-cblue hover:text-cbluef font-semibold mr-5 flex-col"
        >
          <i className="fas fa-user text-2xl "></i>
          Profile
        </button>
      ) : (
        <div className='mr-5'>
          <button 
            onClick={() => navigate('/signin')} 
            className="text-sm mr-3 text-cbluef font-semibold"
          >
            Sign In
          </button>
          <button 
            onClick={() => navigate('/signup')} 
            className="text-sm text-cbluef font-semibold"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
</nav>
  )
}