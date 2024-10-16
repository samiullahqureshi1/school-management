import React from 'react';
// Uncomment if you are using an icon library
// import { FaHome } from 'react-icons/fa';

const AllClasses = () => {
 
  return (
    <div className="w-[100%] mx-auto p-6 mt-20 ">
    {/* Title Box */}
    <div className="mb-6 p-2 rounded-lg  border border-gray-500 shadow-sm">
      <div className="flex items-center">
        <h2 className="text-xl font-bold text-gray-800">Classes</h2>
        <span className="mx-2 text-gray-500">|</span> {/* Pipe separator */}
        <span className="text-gray-500 mr-2">🏠</span> {/* Simple home icon */}
        <span className="text-gray-700">All Classes</span>
      </div>
      
    </div>

    </div>
  );
};

export default AllClasses;
