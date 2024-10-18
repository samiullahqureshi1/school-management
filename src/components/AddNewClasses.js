import React, { useState } from 'react';
// Uncomment if you are using an icon library
// import { FaHome } from 'react-icons/fa';

const AddClass = () => {
  const [className, setClassName] = useState('');
  const [tuitionFees, setTuitionFees] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., API call
    console.log({ className, tuitionFees, selectedTeacher });
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 mt-16 md:mt-20">
      {/* Title Box */}
      <div className="mb-6 p-2 rounded-lg border border-purple-500 shadow-sm">
        <div className="flex items-center justify-center md:justify-start">
          <h2 className="text-xl font-bold text-gray-800">Classes</h2>
          <span className="mx-2 text-gray-500 hidden md:inline">|</span> {/* Pipe separator */}
          <span className="text-gray-500 mr-2">🏠</span> {/* Simple home icon */}
          <span className="text-gray-700">Add New Class</span>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h6 className="text-center text-gray-950 font-bold text-2xl pb-2">
          Add New Class
        </h6>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="className"
              className="block text-sm font-medium text-gray-700"
            >
              Class Name*
            </label>
            <input
              type="text"
              id="className"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
              className="mt-1 block w-full border rounded-3xl p-2 focus:ring-indigo-500 focus:border-indigo-500"
              style={{ borderColor: '#a855f7' }}
            />
          </div>
          <div>
            <label
              htmlFor="tuitionFees"
              className="block text-sm font-medium text-gray-700"
            >
              Monthly Tuition Fees*
            </label>
            <input
              type="number"
              id="tuitionFees"
              value={tuitionFees}
              onChange={(e) => setTuitionFees(e.target.value)}
              required
              className="mt-1 block w-full border rounded-3xl p-2 focus:ring-indigo-500 focus:border-indigo-500"
              style={{ borderColor: '#a855f7' }}
            />
          </div>
          <div>
            <label
              htmlFor="teacher"
              className="block text-sm font-medium text-gray-700"
            >
              Select Class Teacher*
            </label>
            <div className="mt-1">
              <select
                id="teacher"
                value={selectedTeacher}
                onChange={(e) => setSelectedTeacher(e.target.value)}
                required
                className="block w-full md:w-[50%] lg:w-[100%] border rounded-3xl p-2 focus:ring-indigo-500 focus:border-indigo-500"
                style={{ borderColor: '#a855f7' }}
              >
                <option value="">Select</option>
                {/* Add teacher options here */}
                <option value="teacher1">Teacher 1</option>
                <option value="teacher2">Teacher 2</option>
                {/* More teachers */}
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-[40%] bg-orange-500 text-white font-bold py-2 rounded-3xl hover:bg-orange-600 transition-all duration-300"
            >
              + Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
