import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-100 shadow-md sticky">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-8">
            <Link href="/" className="font-semibold text-xl text-black opacity-55">
              Logo
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/" className="text-purple-600 hover:text-purple-800">
                Work
              </Link>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Blog
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-800">
                About
              </Link>
            </div>
          </div>
          <div>
            <Link href="/" className="bg-black text-white px-4 py-2 rounded-md font-bold hover:bg-gray-800 transition duration-300">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;