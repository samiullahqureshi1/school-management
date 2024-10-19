import React, { useRef } from 'react';

const AddStudents = () => {
  // Reference to the form inputs
  const formRef = useRef();

  // Reset function to clear all input fields
  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset(); // Resets the form
    }
  };

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
        <form ref={formRef} className="p-4 border rounded-lg shadow-md bg-gray-50">
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
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Birth ID/CNIC*
                </label>
                <input
                  type="text"
                  placeholder="Birth ID/CNIC"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Orphan Student*
                </label>
                <select className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300">
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Gender*
                </label>
                <select className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Caste*
                </label>
                <input
                  type="text"
                  placeholder="Caste"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Previous School
                </label>
                <input
                  type="text"
                  placeholder="Previous School Name"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Identification Marks
                </label>
                <input
                  type="text"
                  placeholder="Any Identification Marks"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Religion
                </label>
                <input
                  type="text"
                  placeholder="Religion"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Blood Group
                </label>
                <input
                  type="text"
                  placeholder="Blood Group"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Previous ID
                </label>
                <input
                  type="text"
                  placeholder="Previous ID"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Additional Notes
                </label>
                <textarea
                  placeholder="Additional Notes"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                  rows="3"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Total Siblings
                </label>
                <input
                  type="number"
                  placeholder="Number of Siblings"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Address*
                </label>
                <textarea
                  placeholder="Address"
                  className="w-full p-2 border border-purple-500 rounded-3xl focus:outline-none focus:ring focus:border-purple-300"
                  rows="3"
                />
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t-2 border-purple-500 mt-4 mb-6" />

          {/* Submit and Reset Buttons */}
          <div className="flex justify-center mt-4 gap-4">
            <button
              type="button"
              onClick={handleReset} // Call reset function on click
              className=" md-w-[10%] px-4 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600 focus:outline-none"
            >
              Reset
            </button>
            <button className="md-w-[30%] px-4 py-2 text-white bg-purple-500 rounded-full hover:bg-purple-600 focus:outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudents;
