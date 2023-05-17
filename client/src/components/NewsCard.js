import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded shadow-md">
      <img src={article.urlToImage} alt="News Image" className="w-full h-48 object-cover rounded-t" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{new Date(article.publishedAt).toLocaleDateString()}</p>
        <p className="text-gray-800">{article.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
