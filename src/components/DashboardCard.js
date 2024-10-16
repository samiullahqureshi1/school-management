import React from 'react';
import { FaUser, FaBriefcase, FaDollarSign } from 'react-icons/fa';

const DashboardCards = () => {
  return (
    <div className="flex space-x-4 p-6 mt-[80px]">
      {/* Total Students Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-4 w-80 text-white hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-sm mt-1">This Month</p>
          </div>
          <FaUser className="text-2xl" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-4xl font-bold">0</h1>
          <p className="text-sm">$ 0</p>
        </div>
      </div>

      {/* Total Employees Card */}
      <div className="bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl p-4 w-80 text-white hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Total Employees</h3>
            <p className="text-sm mt-1">This Month</p>
          </div>
          <FaBriefcase className="text-2xl" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-4xl font-bold">0</h1>
          <p className="text-sm">$ 0</p>
        </div>
      </div>

      {/* Revenue Card */}
      <div className="bg-gradient-to-r from-red-300 to-pink-400 rounded-xl p-4 w-80 text-white hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-sm mt-1">This Month</p>
          </div>
          <FaDollarSign className="text-2xl" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-4xl font-bold">0</h1>
          <p className="text-sm">$ 0</p>
        </div>
      </div>

      {/* Total Profit Card */}
      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl p-4 w-80 text-white hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Total Profit</h3>
            <p className="text-sm mt-1">This Month</p>
          </div>
          <FaDollarSign className="text-2xl" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-4xl font-bold">0</h1>
          <p className="text-sm">$ 0</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
