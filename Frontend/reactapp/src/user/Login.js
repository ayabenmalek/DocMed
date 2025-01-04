import React, { useContext, useState } from 'react';

// import {AuthContext}  from '../components/AuthProvider';

export default function Login() {
  // const { login } = useContext(AuthContext); // On récupère la fonction login depuis le contexte
  // ici on manipule la variable login qui existe dans le context
  // const [username, setUsername] = useState(''); // État pour stocker le nom d'utilisateur
  // const [password, setPassword] = useState(''); // État pour stocker le mot de passe

  // const handleLogin = () => {
  //   login(username, password); // On appelle la fonction login avec les valeurs de username et password
  // };

  return (
   
    
    <div className="flex flex-col md:flex-row h-screen">
    {}
    <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 py-6">
      <div className="max-w-md w-full mx-auto">
      
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Welcome back!</h2>
        <p className="text-gray-500 mb-8">
          Enter your credentials to access your account
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="text-sm w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="text-sm w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-baseBlue hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-700">
              Remember for 30 days
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-2 border rounded-lg font-medium hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="text-center my-4 text-gray-500">Or</div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center gap-2 border py-2 px-4 rounded-lg hover:bg-gray-100">
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
            />
            Sign in with Google
          </button>
         
        </div>
      </div>
    </div>

    
   
  </div>
  

  )
}
