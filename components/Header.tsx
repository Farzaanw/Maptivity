
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 h-16 flex items-center px-6 z-50 shadow-sm shrink-0">
      <div className="flex items-center gap-2">
        <div className="bg-indigo-600 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-gray-800">
          Maptivity
        </h1>
      </div>
      <nav className="ml-auto hidden sm:flex items-center gap-6">
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Explore</a>
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Favorites</a>
        <button className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">Sign In</button>
      </nav>
    </header>
  );
};

export default Header;
