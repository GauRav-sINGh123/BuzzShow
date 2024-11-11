'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NewsCard from './NewsCard';
 

export default function RightSidebar() {
  const [input, setInput] = useState<string>('');
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/${input}`);
    setTimeout(() => {
      router.refresh();
    }, 100);
  };
  return (
    <>
      <div className='sticky top-0 '>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Search'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2'
          />
        </form>
      </div>
     <div className='mt-5'>
     <NewsCard/>
     </div>
    </>
  );
}