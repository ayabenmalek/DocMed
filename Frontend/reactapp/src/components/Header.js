import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Docs from '../photos/doctors.png';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchTerm.trim() !== '') {
      try {
        const response = await axios.get(`/api/search?query=${searchTerm}`);
        const results = response.data.results;
        navigate('/search', { state: { searchResults: results } }); // Navigate to SearchPage with results
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-start p-8 h-[90vh] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Docs})`,
          backgroundSize: 'cover',
          filter: 'blur(2.5px) brightness(0.5)',
        }}
      ></div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl text-cwhite font-bold mb-3 mt-6">Your Health, Our Priority</h1>
        <p className="text-lg mb-6 text-cwhite">Find the best doctors, book appointments, and get health advice.</p>
        <div className="flex">
          <input
            type="text"
            placeholder="Search for doctors, specialties..."
            className="px-4 py-2 w-full md:w-78 border border-gray-300 rounded-l-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-cblue text-white px-4 py-2 rounded-r-md hover:bg-cbluef transition ease-out duration-200"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
