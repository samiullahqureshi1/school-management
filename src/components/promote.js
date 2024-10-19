import React from 'react';

const SearchStudents = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      {/* Search Section */}
      <div className="flex flex-col md:flex-row items-center w-[90%] max-w-6xl space-y-4 md:space-y-0 md:space-x-4">
        {/* Search Student Input */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search Student"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-purple-300"
          />
          <button className="absolute inset-y-0 right-0 flex items-center p-2 text-gray-600 bg-gray-200 rounded-r-lg border border-gray-300 hover:bg-gray-300 focus:outline-none">
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

        {/* Select Class Input */}
        <div className="relative flex-grow">
          <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-purple-300">
            <option value="">--Select Class--</option>
            <option value="class1">Class 1</option>
            <option value="class2">Class 2</option>
            {/* Add more options as needed */}
          </select>
          <button className="absolute inset-y-0 right-0 flex items-center p-2 text-gray-600 bg-gray-200 rounded-r-lg border border-gray-300 hover:bg-gray-300 focus:outline-none">
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
      </div>

      {/* Horizontal Lines Under Search Bars */}
      <div className="w-[90%] max-w-6xl mt-2">
        <hr className="border-t border-gray-300" />
      </div>

      {/* Table Section */}
      <div className="w-[90%] max-w-6xl mt-6 border border-gray-300 rounded-lg overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left text-purple-500">ID</th>
              <th className="border px-4 py-2 text-left text-purple-500">Name</th>
              <th className="border px-4 py-2 text-left text-purple-500">Class</th>
              <th className="border px-4 py-2 text-left text-purple-500">P/D in</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through student data to display here */}
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">Class 1</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Submit Button Section */}
      <div className="mt-4">
        <button className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SearchStudents;
