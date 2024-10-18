import React from 'react';

const AddStudents = () => {
  return (
    <div className='flex justify-center'>
      <div className="w-[90%] max-w-6xl p-6 mt-20"> {/* Set width to 90% with max width for larger screens */}
        {/* Title Box */}
        <div className="mb-6 p-2 rounded-lg border border-gray-400 shadow-sm">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-gray-800">Students</h2>
            <span className="mx-2 text-gray-500">|</span> {/* Pipe separator */}
            <span className="text-gray-500 mr-2">🏠-</span> {/* Simple home icon */}
            <span className="text-gray-700">Admission Form</span>
          </div>
        </div>

        {/* Admission Form */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          {/* Student Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              1. Student Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Adjust grid columns for different screen sizes */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Student Name*
                </label>
                <input
                  type="text"
                  placeholder="Name of Student"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Last Registration: None
                </label>
                <input
                  type="text"
                  placeholder="Registration No"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Picture - Optional
                </label>
                <input
                  type="file"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
                <small className="text-orange-500">Max size 100KB</small>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Date of Admission*
                </label>
                <input
                  type="text"
                  placeholder="16/10/2024"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Select Class*
                </label>
                <select className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300">
                  <option>Select Class</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Discount In Fee*
                </label>
                <input
                  type="text"
                  placeholder="In %"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Mobile No. for SMS/WhatsApp
                </label>
                <input
                  type="text"
                  placeholder="e.g +44xxxxxxxxxx"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-t-2 border-purple-500 mb-6" />

          {/* Other Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              2. Other Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Date Of Birth
                </label>
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              {/* Add other fields as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudents;
