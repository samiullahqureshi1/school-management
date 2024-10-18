import React from "react";
import { FaUser, FaBriefcase, FaDollarSign, FaCircle } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale
);

const DashboardCards = () => {
  const data = {
    labels: [
      "May 2024",
      "June 2024",
      "July 2024",
      "August 2024",
      "September 2024",
      "October 2024",
    ],
    datasets: [
      {
        label: "Expenses",
        data: [-0.5, -0.7, -0.6, -0.8, -0.4, -0.3],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Income",
        data: [0.5, 0.7, 0.8, 0.6, 0.9, 0.8],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
        type: "category",
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
        min: -1.0,
        max: 1.0,
      },
    },
  };

  return (
    <div className="p-6 mt-[80px]">
      <div className="flex flex-wrap justify-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-4 w-full sm:w-[47%] md:w-[30%] lg:w-[21%] text-white hover:shadow-lg transition-shadow duration-300">
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

        <div className="bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl p-4 w-full sm:w-[47%] md:w-[30%] lg:w-[21%] text-white hover:shadow-lg transition-shadow duration-300">
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

        <div className="bg-gradient-to-r from-red-300 to-pink-400 rounded-xl p-4 w-full sm:w-[47%] md:w-[30%] lg:w-[21%] text-white hover:shadow-lg transition-shadow duration-300">
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

        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl p-4 w-full sm:w-[47%] md:w-[30%] lg:w-[21%] text-white hover:shadow-lg transition-shadow duration-300">
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

      <div className="flex justify-end flex-wrap lg:flex-nowrap">
        <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-[55%] mb-6 lg:mb-0">
          <h2 className="text-lg font-semibold text-gray-700 text-center">
            Statistics
          </h2>
          <Line data={data} options={options} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-[30%] lg:ml-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Estimated Fee This Month
          </h3>
          <div className="flex flex-col items-center mt-4">
            <FaCircle className="text-green-600 text-xl" />
            <span className="font-semibold text-gray-700">Estimation</span>
            <p className="text-2xl font-bold text-green-600">$0</p>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Collections:</span>
              <span className="text-blue-600">$300</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="font-semibold text-gray-700">Remainings:</span>
              <span className="text-red-600">$200</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex  flex-wrap lg:justify-end lg:space-x-6 gap-1">
        <div className="bg-[#E1F5FE] shadow-md rounded-lg p-4 w-full mb-4 lg:w-[54.5%]">
          <h3 className="text-lg font-semibold text-[#0D47A1]">
            Free SMS Gateway
          </h3>
          <p className="text-sm text-[#0D47A1]">
            Send Unlimited Free SMS on Mobile Numbers.
          </p>
        </div>

        <div className="bg-[#E1F5FE] shadow-md rounded-lg p-4 w-full mb-4 lg:w-[30%]">
          <div className="flex flex-col py-2 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Today Present Students</p>
              <span className="text-blue-500 font-semibold">0%</span>
            </div>
          </div>

          <div className="flex flex-col py-2 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Today Present Employees</p>
              <span className="text-red-500 font-semibold">0%</span>
            </div>
          </div>

          <div className="flex flex-col py-2">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">This Month Fee Collection</p>
              <span className="text-blue-500 font-semibold">0%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
