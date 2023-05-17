import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch news articles from NewsAPI
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d298a5c72d2f4075a3f8b98dd055c046')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
