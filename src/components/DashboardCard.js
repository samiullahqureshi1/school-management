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
        data: [-0.5, -0.7, -0.6, -0.8, -0.4, -0.3], // Sample data for expenses
        borderColor: "rgba(255, 99, 132, 1)", // Red color for expenses
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Income",
        data: [0.5, 0.7, 0.8, 0.6, 0.9, 0.8], // Sample data for income
        borderColor: "rgba(54, 162, 235, 1)", // Blue color for income
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // Options for the chart
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
      <div className="flex justify-end space-x-4 mb-6">
        {/* Total Students Card */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-4 w-[21%] text-white hover:shadow-lg transition-shadow duration-300">
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
        <div className="bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl p-4 w-[21%] text-white hover:shadow-lg transition-shadow duration-300">
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
        <div className="bg-gradient-to-r from-red-300 to-pink-400 rounded-xl p-4 w-[21%] text-white hover:shadow-lg transition-shadow duration-300">
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
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl p-4 w-[21%] text-white hover:shadow-lg transition-shadow duration-300">
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

      {/* Main Content with Chart and Info Box */}
      <div className="flex ml-[200px] pl-12">
        <div className="bg-white shadow-md rounded-lg p-6 w-[63%]">
          {" "}
          {/* Added left margin */}
          <h2 className="text-lg font-semibold text-gray-700 text-center">
            Statistics
          </h2>
          <Line data={data} options={options} />
        </div>

        {/* Info Box */}
        <div className="absolute bg-white shadow-md rounded-lg p-6 w-[28%] left-[70%]">
          {" "}
          {/* Adjusted position */}
          <h3 className="text-lg font-semibold text-gray-800">
            Estimated Fee This Month
          </h3>
          <div className="flex flex-col items-center mt-4">
            {" "}
            {/* Estimation section */}
            <FaCircle className="text-green-600 text-xl" /> {/* Circle icon */}
            <span className="font-semibold text-gray-700">Estimation</span>
            <p className="text-2xl font-bold text-green-600">$0</p>{" "}
            {/* Dollar value */}
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Collections:</span>
              <span className="text-blue-600">$300</span>{" "}
              {/* Collections Amount */}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="font-semibold text-gray-700">Remainings:</span>
              <span className="text-red-600">$200</span>{" "}
              {/* Remaining Amount */}
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        {/* Parent container is positioned relatively to allow absolute positioning */}
        <div className="absolute right-4 top-[-330px] bg-[#E1F5FE] shadow-md rounded-lg p-4 w-[28%]">
          <h3 className="text-lg font-semibold text-[#0D47A1]">
            Free SMS Gateway
          </h3>
          <p className="text-sm text-[#0D47A1]">
            Send Unlimited Free SMS on Mobile Numbers.
          </p>
        </div>
        <div className="relative mt-8">
          {/* Parent container with positive top value to move the StatusBox upwards */}
          <div className="absolute right-5  pl-2 top-[-230px] bg-[#E1F5FE] shadow-md rounded-lg p-4 w-[28%]">
            {/* Today Present Students */}
            <div className="flex flex-col py-2 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-600">Today Present Students</p>
                <span className="text-blue-500 font-semibold">0%</span>
              </div>
              <div className="h-1 bg-gray-200 mt-1 w-full"></div>{" "}
              {/* Loading line */}
            </div>

            {/* Today Present Employees */}
            <div className="flex flex-col py-2 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-600">Today Present Employees</p>
                <span className="text-red-500 font-semibold">0%</span>
              </div>
              <div className="h-1 bg-gray-200 mt-1 w-full"></div>{" "}
              {/* Loading line */}
            </div>

            {/* This Month Fee Collection */}
            <div className="flex flex-col py-2">
              <div className="flex justify-between items-center">
                <p className="text-gray-600">This Month Fee Collection</p>
                <span className="text-blue-500 font-semibold">0%</span>
              </div>
              <div className="h-1 bg-gray-200 mt-1 w-full"></div>{" "}
              {/* Loading line */}
            </div>
          </div>

          {/*calender*/}
          <div className="flex justify-end relative -top-8 pr-4">
            <div className="bg-white shadow-md rounded-lg p-4 w-[28%]">
              <div className="flex justify-between items-center mb-4">
                <button className="text-gray-600 hover:text-gray-800">
                  &lt;
                </button>
                <div className="text-center">
                  <p className="text-sm text-red-400 font-semibold">
                    OCTOBER, 2024
                  </p>
                  <p className="text-xs text-red-300 font-semibold">
                    THU OCT 17 2024
                  </p>
                </div>
                <button className="text-gray-600 hover:text-gray-800">
                  &gt;
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-600">
                <p>SUN</p>
                <p>MON</p>
                <p>TUE</p>
                <p>WED</p>
                <p>THU</p>
                <p>FRI</p>
                <p>SAT</p>
                <p className="text-gray-400">29</p>
                <p className="text-gray-400">30</p>
                <p className="text-gray-400">1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
                <p>14</p>
                <p>15</p>
                <p>16</p>
                <p className="bg-red-100 text-red-400 font-semibold rounded-lg">
                  17
                </p>
                <p>18</p>
                <p>19</p>
                <p>20</p>
                <p>21</p>
                <p>22</p>
                <p>23</p>
                <p>24</p>
                <p>25</p>
                <p>26</p>
                <p>27</p>
                <p>28</p>
                <p>29</p>
                <p>30</p>
                <p>31</p>
                <p className="text-gray-400">1</p>
                <p className="text-gray-400">2</p>
                <p className="text-gray-400">3</p>
                <p className="text-gray-400">4</p>
                <p className="text-gray-400">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
