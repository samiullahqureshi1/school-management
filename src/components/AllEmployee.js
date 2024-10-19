import React from 'react';

const SearchAndAdd = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      {/* Search Section */}
      <div className="relative flex-grow w-[90%] max-w-6xl mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
        />
        <button className="absolute inset-y-0 right-0 flex items-center justify-center p-3 text-white bg-purple-500 rounded-r-lg shadow-md hover:bg-purple-600 focus:outline-none transition duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14h4m-2-2v4m10 2a9.96 9.96 0 01-3.88 7.56 9.96 9.96 0 01-7.56 3.88A10 10 0 1112 2a9.96 9.96 0 017.56 3.88A9.96 9.96 0 0122 12z"
            />
          </svg>
        </button>
      </div>

      {/* Add New Section */}
      <div className="flex flex-col items-center mt-4 cursor-pointer">
        <div className="flex flex-col items-center justify-center w-40 h-40 bg-purple-500 rounded-full relative">
          {/* Plus Sign */}
          <span className="absolute mb-4 left-1/2 transform -translate-x-1/2 text-white text-4xl">+</span>
          {/* Add New Text */}
          <span className="text-white text-lg font-semibold mt-8">Add New</span>
        </div>
      </div>
    </div>
  );
};

export default SearchAndAdd;
