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
    <div className='flex justify-end'>
    <div className="w-[87%] p-6 mt-20">
      {/* Title Box */}
      <div className="mb-6 p-2 rounded-lg border border-gray-500 shadow-sm flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-gray-800">Students</h2>
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
          <span>{showSearchFields ? "Close" : "Search"}</span>
        </button>
      </div>

      {/* Conditionally Render Search Input Fields */}
      {showSearchFields && (
        <div className="mb-6 flex justify-end gap-4">
          <input
            type="text"
            placeholder="Search Student Name"
            className="p-3 border rounded-3xl w-50"
            style={{ borderColor: '#a855f7' }}
          />
          <input
            type="text"
            placeholder="Search Class Name"
            className="p-3 border rounded-3xl w-50"
            style={{ borderColor: '#a855f7' }}
          />
        </div>
      )}

      {/* Add New Box */}
      <div 
        className="w-36 h-36 border-2 border-dashed border-blue-500 flex flex-col items-center justify-center rounded-lg cursor-pointer hover:bg-blue-100 transition"
        onClick={redirectToAddNewStudent}
      >
        <span className="text-3xl text-blue-500">+</span>
        <p className="text-blue-500 font-bold">Add New</p>
      </div>
      </div>
    </div>
  );
};

export default AllStudents;
