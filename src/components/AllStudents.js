import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const AllStudents = () => {
  // State to manage the search button click
  const [showSearchFields, setShowSearchFields] = useState(false);

  // Function to redirect to the Add New Student page
  const redirectToAddNewStudent = () => {
    window.location.href = "/add-new-student"; // Update with your actual route
  };

  // Function to toggle the search fields
  const handleSearchClick = () => {
    setShowSearchFields(!showSearchFields);
  };

  return (
    <div className='flex justify-center'>
      <div className="w-[95%] max-w-6xl p-4 mt-[90px]"> {/* Set width to 95% for better mobile support */}
        {/* Title Box */}
        <div className="mb-6 p-4 rounded-lg border border-gray-500 shadow-sm flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0"> {/* Margin bottom for mobile */}
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Students</h2>
            <span className="mx-2 text-gray-500">|</span> {/* Pipe separator */}
            <span className="text-gray-500 mr-2">🏠</span> {/* Simple home icon */}
            <span className="text-gray-700">All Students</span>
          </div>
          <button
            onClick={handleSearchClick}
            className={`flex items-center px-4 py-2 border rounded-md ${
              showSearchFields ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
            } transition`}
          >
            {/* Toggle icon based on the state */}
            {showSearchFields ? <FaTimes className="mr-2" /> : <FaSearch className="mr-2" />}
            <span className="text-sm sm:text-base">{showSearchFields ? "Close" : "Search"}</span>
          </button>
        </div>

        {/* Conditionally Render Search Input Fields */}
        {showSearchFields && (
          <div className="mb-6 flex flex-col gap-4 sm:flex-row justify-end">
            <input
              type="text"
              placeholder="Search Student Name"
              className="p-3 border rounded-3xl w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{ borderColor: '#a855f7' }}
            />
            <input
              type="text"
              placeholder="Search Class Name"
              className="p-3 border rounded-3xl w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{ borderColor: '#a855f7' }}
            />
          </div>
        )}

        {/* Add New Box */}
        <div 
          className="w-full sm:w-36 h-36 border-2 border-dashed border-blue-500 flex flex-col items-center justify-center rounded-lg cursor-pointer hover:bg-blue-100 transition"
          onClick={redirectToAddNewStudent}
        >
          <span className="text-4xl sm:text-3xl text-blue-500">+</span>
          <p className="text-blue-500 font-bold text-sm sm:text-base">Add New</p>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
