'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for each article
type Article = {
  url: string;
  title: string;
  source: { name: string };
  urlToImage: string;
};

export default function News() {
  const [news, setNews] = useState<Article[]>([]);
  const [articleNum, setArticleNum] = useState(3);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('https://saurav.tech/NewsAPI/top-headlines/category/business/in.json')
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load news. Please try again later.');
      });
  }, []);

  return (
    <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 overflow-y-scroll scroll-smooth'>
      <h4 className='font-bold text-xl px-4'>What's happening</h4>
      {error ? (
        <p className='text-red-500 px-4'>{error}</p>
      ) : (
        news.slice(0, articleNum).map((article) => (
          <div key={article.url}>
            <a href={article.url} target='_blank' rel='noopener noreferrer'>
              <div className='flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200'>
                <div className='space-y-0.5'>
                  <h6 className='text-sm font-bold'>{article.title}</h6>
                  <p className='text-xs font-medium text-gray-500'>
                    {article.source.name}
                  </p>
                </div>
                <img src={article.urlToImage} width={70} className='rounded-xl' alt='news' />
              </div>
            </a>
          </div>
        ))
      )}
      {!error && (
        <button
          onClick={() => setArticleNum(articleNum + 2)}
          className='text-blue-300 pl-4 pb-3 hover:text-blue-400 text-sm'
        >
          Load more
        </button>
      )}
    </div>
  );
}
