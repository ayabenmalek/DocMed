import React from 'react'
import { NavLink } from 'react-router-dom';
import { HomeIcon, PencilIcon, ChatIcon, PlusCircleIcon, LogoutIcon } from '@heroicons/react/outline';
import Logo from '../photos/Logo.png'
export default function Navwriter() {
  
  const baseClass = "text-sm p-3  border border-transparent transition duration-200 flex flex-row justify-center md:justify-start  gap-3 width-full";
  const activeClass = "border-l-2 border-l-secondary text-secondary border-blue-500"; // Couleur active en bleu avec transparence
  const inactiveClass = "text-primary-300 hover:bg-secondary hover:bg-opacity-40 rounded-lg"; // Fond transparent et fond bleu au survol

  return (
    <div className ='flex flex-col items-center h-screen p-4 bg-white  lg:w-1/6 w-1/6' >
      <NavLink to="/Dashbord" className="text-center text-lg font-bold text-blue-500"><img className='w-40 h-36' src={Logo} alt='' ></img></NavLink>
      <p className='font-quicksand text-center text-lg font-semibold' >Name of the writer</p>
      <nav className='flex flex-col justify-evenly h-2/3' >
        <NavLink to='/Dashbord' className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}
          end> <HomeIcon className="w-5 h-5" /> <span className="hidden md:flex  ">Dashboard</span></NavLink>

        <NavLink to='/Ecrits' className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}
          end> <PencilIcon className="w-5 h-5" /> <span className="hidden md:flex ">Les écrits</span></NavLink>

        <NavLink  to= '/Ajouter'className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}
          end>  <PlusCircleIcon className="w-5 h-5" /> <span className="hidden md:flex  ">Ajouter</span></NavLink>

        <NavLink to='/Commentaires' className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}
          end><ChatIcon className="w-5 h-5" />  <span className="hidden md:flex  ">Commentaires</span> </NavLink>

        <NavLink to='/Login' className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}                    
        end>  <LogoutIcon className="w-5 h-5" /> <span className="hidden md:flex  ">Log Out</span></NavLink>
      </nav>
      

    </div>
  )
}
