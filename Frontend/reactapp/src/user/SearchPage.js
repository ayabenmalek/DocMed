import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';

const SearchPage = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <div className="flex flex-wrap">
        {searchResults.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            author={article.author}
            category={article.category}
            likes={article.likes}
            comments={article.comments}
          />
        ))}
      </div>
      {!searchResults.length && <p>No articles found.</p>}
    </div>
  );
};

export default SearchPage;
