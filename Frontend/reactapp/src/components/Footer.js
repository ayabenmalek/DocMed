import React from 'react';
import logoblanc from '../photos/logoblanc.png'

const Footer = () => {
  return (
    <footer className="bg-cbluef text-white p-4 text-center">

      <div className='flex flex-row justify-between pl-8 pr-8 items-center'>
        <div  className='flex flex-col items-start justify-center pl-8 pr-8'>
          <img src={logoblanc} alt="logo" className="w-32  "/>
          <ul className="flex flex-row justify-center space-x-4 mt-2 items-center self-center">
          <li><a href='#'><i className="fab fa-instagram text-2xl hover:text-black"></i></a></li>
          <li><a href='#'><i className="fab fa-facebook-f text-2xl hover:text-black "></i> </a> </li>
          <li><a href='#'><i className="fab fa-twitter text-2xl hover:text-black"></i></a> </li>
          </ul>
        </div>
        <ul className="flex flex-col text-left justify-center">
          <h3 className='text-center mb-4'>Contact us on:</h3>
          <li className='ml-0'><i className="fas fa-envelope "></i> docmed@gmail.com</li>
          <li className='ml-0'><i className="fas fa-phone "></i> +2135346846</li>
        </ul>
        <ul className="flex flex-col justify-center">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </div>
      <p className='mt-7'>&copy; 2024 DocMed. All rights reserved.</p>

    </footer>
  );
};

export default Footer;