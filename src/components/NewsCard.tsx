'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { TrendingUp } from 'lucide-react';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import SkeletonCard from './SkeletonCard';

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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('https://saurav.tech/NewsAPI/top-headlines/category/business/in.json')
      .then((response) => {
        setNews(response.data.articles);
        setIsLoading(false);  
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load news. Please try again later.');
        setIsLoading(false);  
      });
  }, []);

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <div className="mt-6 border border-emerald-800/20 bg-black/40 p-4 backdrop-blur-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-emerald-500" />
        Trending Topics
      </h2>
      <ScrollArea className="h-[400px] overflow-y-auto pr-4 space-y-4 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-gray-800">
        <div className="space-y-4">
          {error ? (
            <p className="text-red-500 px-4">{error}</p>
          ) : (
            news.slice(0, articleNum).map((article) => (
              <a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 hover-gradient rounded-lg transition-all duration-300 cursor-pointer"
              >
                {/* Article image */}
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-36 object-cover rounded-lg mb-2"
                />
                <h3 className="font-medium text-gray-100">{article.title}</h3>
                <p className="text-sm text-gray-400">{article.source.name}</p>
              </a>
            ))
          )}
        </div>
      </ScrollArea>
      {!error && (
        <button
          onClick={() => setArticleNum(articleNum + 2)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400 text-sm mt-4"
        >
          Load more
        </button>
      )}
    </div>
  );
}
