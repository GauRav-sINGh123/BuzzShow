'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NewsCard from './NewsCard';
import { Input } from './ui/input';
 
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
      <div className="sticky top-0">
        <form onSubmit={handleSubmit} className="relative">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search..."
            className="pl-10 bg-white/5 border-white/10 focus:border-emerald-500/50 transition-colors w-full rounded-3xl px-4 py-2"
          />
        </form>
      </div>
      <div className="mt-3">
        <NewsCard />
      </div>
    </>
  );
}
