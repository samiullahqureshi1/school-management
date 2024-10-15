import React from 'react';

const TodayAbsentStudents = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md p-6 w-[63%] ml-6 mt-2 mb-2"> {/* Added width and right margin */}
      <h2 className="text-lg font-bold mb-2 text-red-600">Today Absent Students</h2> {/* Changed title color to red */}
      <div className="flex justify-center items-center">
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15l-4 4 4-4"></path>
        </svg>
        <p className="text-red-600 ml-2">Attendance Not Marked Yet!</p> {/* Changed text color to red */}
      </div>
    </div>
  );
};

export default TodayAbsentStudents;
