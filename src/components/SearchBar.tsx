import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search for causes...", className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <input 
        type="text" 
        placeholder={placeholder}
        className="hidden md:block w-72 md:w-80 px-6 py-3 border-2 border-gray-300 rounded-full text-sm focus:outline-none 
        focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-all duration-300 ease-in-out"
      />
      <button className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M8 4a8 8 0 100 16 8 8 0 100-16zm12 12l-4-4" 
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
