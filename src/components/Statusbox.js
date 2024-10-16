import React from 'react';

const StatusBox = () => {
  return (
    <div className="relative mt-8">
      {/* Parent container with positive top value to move the StatusBox upwards */}
      <div className="absolute right-11 top-[-330px] bg-[#E1F5FE] shadow-md rounded-lg p-4 w-[28%]">
        {/* Today Present Students */}
        <div className="flex flex-col py-2 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Today Present Students</p>
            <span className="text-blue-500 font-semibold">0%</span>
          </div>
          <div className="h-1 bg-gray-200 mt-1 w-full"></div> {/* Loading line */}
        </div>

        {/* Today Present Employees */}
        <div className="flex flex-col py-2 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Today Present Employees</p>
            <span className="text-red-500 font-semibold">0%</span>
          </div>
          <div className="h-1 bg-gray-200 mt-1 w-full"></div> {/* Loading line */}
        </div>

        {/* This Month Fee Collection */}
        <div className="flex flex-col py-2">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">This Month Fee Collection</p>
            <span className="text-blue-500 font-semibold">0%</span>
          </div>
          <div className="h-1 bg-gray-200 mt-1 w-full"></div> {/* Loading line */}
        </div>
      </div>
    </div>
  );
};

export default StatusBox;
