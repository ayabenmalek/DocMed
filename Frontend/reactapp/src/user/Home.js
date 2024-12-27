import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardsSection from '../components/CardsSection';
import Services from '../components/Services';
import Footer from '../components/Footer';

import axios from 'axios';

const HomePage = () => {
  const [mostLiked, setMostLiked] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState([]);

  useEffect(() => {


    // Fetch 'Most Liked' items
    axios.get('/api/items/most-liked')
      .then(response => {
        setMostLiked(response.data.items);
      })
      .catch(error => {
        console.error("Error fetching most liked items:", error);
      });

    // Fetch 'Recently Added' items
    axios.get('/api/items/recently-added')
      .then(response => {
        setRecentlyAdded(response.data.items);
      })
      .catch(error => {
        console.error("Error fetching recently added items:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Services />

      <CardsSection title="Most Liked" items={mostLiked} />
      <CardsSection title="Recently Added" items={recentlyAdded} />
      <Footer/>

    </div>
  );
};

export default HomePage;