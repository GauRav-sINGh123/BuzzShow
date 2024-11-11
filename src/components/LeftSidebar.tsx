import Link from 'next/link';
import { FaFire } from "react-icons/fa";
import { HiHome } from 'react-icons/hi';

export default function Sidebar() {
  return (
    <div className='flex flex-col p-3 justify-between h-screen items-center'>
      <div className='flex flex-col gap-4 p-3'>
        <Link href='/'>
          <FaFire className='w-16 h-16 cursor-pointer p-3 text-white rounded-full transition-all duration-200 ' />
        </Link>
        <Link
          href='/'
          className='flex items-center p-3  rounded-full transition-all duration-200 gap-2 w-fit'
        >
          <HiHome className='w-7 h-7 text-white' />
          <span className='font-bold hidden xl:inline text-white'>Home</span>
        </Link>
        <button className='bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline font-semibold'>
          SignUp
        </button>
      </div>
      
    </div>
  );
}