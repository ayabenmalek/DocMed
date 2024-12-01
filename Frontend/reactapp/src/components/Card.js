import React from 'react';
const Card = (title , author , category , likes , comments) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 m-4 w-80 flex-shrink-0 border border-gray-200 hover:shadow-lg transition">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <button
          className="text-red-500 hover:text-red-600 text-xl transition"
          aria-label="Like article"
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <p className="text-sm text-gray-700 mb-2 text-left">Author: {author}</p>
      <p className="text-xs text-gray-500 mb-4 text-left">
        Category: <span className="font-medium text-gray-600">{category}</span>
      </p>
      <div className="flex items-center border-t pt-3">
        <span className="text-sm font-semibold text-gray-800">{likes} Likes</span>
        <span className="text-sm font-semibold text-gray-800 ml-2 mr-2">|</span>
        <span className="text-sm font-semibold text-gray-800">{comments} Comments</span>
      </div>
    </div>
  );
};

export default Card;
