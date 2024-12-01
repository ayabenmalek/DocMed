import React, { useRef } from 'react';
import Card from './Card'; // Import the Card1 component

const CardsSection = ({ title, items }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section className="relative p-4">
      <button
        onClick={() => scroll('left')}
        className="absolute left-1 top-1/2 transform -translate-y-1/2  p-2 rounded-full "
      >
        <i className="fas fa-angle-left text-2xl hover:text-black"></i>

      </button>
      <div
        ref={scrollRef}
        className="flex flex-row gap-4 overflow-x-auto scrollbar-hide"
      >
      
        <h2 className="text-2xl font-bold mb-4 flex align-center justify-center text-cbluef text-center ">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              author={item.author}
              category={item.category}
              likes={item.likes}
              comments={item.comments}
            />
        ))}
        </div>
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-1 top-1/2 transform -translate-y-1/2  p-2 rounded-full "
      >
        <i className="fas fa-angle-right text-2xl hover:text-black"></i>      
      </button>
    </section>
  );
};

export default CardsSection;