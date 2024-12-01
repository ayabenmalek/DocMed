import React, { useState } from 'react';
import axios from 'axios';
import Docs from '../photos/doctors.png'


const Header = () => {
  // State to store the search term and the search results
  const [searchTerm, setSearchTerm] = useState('');  // User's search input
  const [searchResults, setSearchResults] = useState([]);  // Results from the backend

  // Handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search when the user clicks the search button
  const handleSearch = async () => {
    if (searchTerm.trim() !== '') {  // Make sure the search term is not empty
      try {
        // Send GET request to the backend with search term
        const response = await axios.get('/api/search?query=${searchTerm}');
        
        // Update the search results in state
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-start p-8 h-[90vh] relative overflow-hidden">
        <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: 'url(${Docs})' , // Use template literals
            backgroundSize: 'cover',
            filter: 'blur(2.5px) brightness(0.5)',
        }}>
        </div>

      <div className="relative z-10 text-left ml-32 md:text-left">
        <h1 className="text-4xl text-left text-cwhite font-bold mb-3 mt-6">Your Health, Our Priority</h1>
        <p className="text-lg mb-6 text-cwhite">Find the best doctors, book appointments, and get health advice.</p>
        <div className="flex">
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search for doctors, specialties..."
            className="px-4 py-2 w-full md:w-78 border border-gray-300 rounded-l-md"
            value={searchTerm}  // Bind to state
            onChange={handleInputChange}  // Update state on change
          />
          {/* Search button */}
          <button
            className="bg-cblue text-white px-4 py-2 rounded-r-md hover:bg-cbluef transition ease-out duration-200"
            onClick={handleSearch}  // Call handleSearch on click
          >
            Search
          </button>
        </div>

        {/* Display search results */}
        <div className="mt-6">
          {searchResults.length > 0 && (
            <ul>
              {searchResults.map((result, index) => (
                <li key={index} className="text-white">
                  {result.name} - {result.specialty}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
