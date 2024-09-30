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
        className="block w-full md:w-80 px-6 py-3 border-2 border-gray-300 rounded-full text-sm focus:outline-none 
        focus:ring-2 focus:ring-highlight focus:border-highlightDark10 transition-all duration-300 ease-in-out"
      />
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20L15.8033 15.8033C15.8033 15.8033 14 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 11.0137 17.9484 11.5153 17.85 12" stroke="#10B981" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;



// import React from 'react';

// interface SearchBarProps {
//   placeholder?: string;
//   className?: string;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search for causes...", className = '' }) => {
//   return (
//     <div className={`relative ${className}`}>
//       <input 
//         type="text" 
//         placeholder={placeholder}
//         className="hidden md:block w-72 md:w-80 px-6 py-3 border-2 border-gray-300 rounded-full text-sm focus:outline-none 
//         focus:ring-2 focus:ring-highlightLight10 focus:border-highlight transition-all duration-300 ease-in-out"
//       />
//       <button className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors">
//         <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M20 20L15.8033 15.8033C15.8033 15.8033 14 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 11.0137 17.9484 11.5153 17.85 12" stroke="#a7adb8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
