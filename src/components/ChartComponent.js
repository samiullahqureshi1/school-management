  import React from 'react';
  import { Line } from 'react-chartjs-2';
  import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend, CategoryScale } from 'chart.js';
  import { FaCircle } from 'react-icons/fa'; // Importing an icon

  // Register the necessary components
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, CategoryScale);

  const StatisticsChartWithBox = () => {
    // Data for the chart
    const data = {
      labels: ['May 2024', 'June 2024', 'July 2024', 'August 2024', 'September 2024', 'October 2024'],
      datasets: [
        {
          label: 'Expenses',
          data: [-0.5, -0.7, -0.6, -0.8, -0.4, -0.3], // Sample data for expenses
          borderColor: 'rgba(255, 99, 132, 1)', // Red color for expenses
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 2,
          fill: true,
        },
        {
          label: 'Income',
          data: [0.5, 0.7, 0.8, 0.6, 0.9, 0.8], // Sample data for income
          borderColor: 'rgba(54, 162, 235, 1)', // Blue color for income
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
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
            text: 'Months',
          },
          type: 'category', // Ensure this matches the scale type you are using
        },
        y: {
          title: {
            display: true,
            text: 'Values',
          },
          min: -1.0,
          max: 1.0,
        },
      },
    };

    return (
      <div className="relative flex items-start">
      <div className="bg-white shadow-md rounded-lg p-6 w-[63%] ml-6"> {/* Added left margin */}
        <h2 className="text-lg font-semibold text-gray-700 text-center">Statistics</h2>
        <Line data={data} options={options} />
      </div>
    

        {/* Info Box Container */}
        <div className="absolute bg-white shadow-md rounded-lg p-6 w-[28%] top-[-107px] left-[68%] ml-2"> {/* Adjusted position */}
          <h3 className="text-lg font-semibold text-gray-800">Estimated Fee This Month</h3>
          
          <div className="flex items-center justify-center mt-4"> {/* Estimation section */}
            <div className="flex flex-col items-center"> {/* Vertical arrangement for the icon and value */}
              <FaCircle className="text-green-600 text-xl" /> {/* Circle icon */}
              <span className="font-semibold text-gray-700">Estimation</span> {/* Estimation label */}
              <p className="text-2xl font-bold text-green-600">$0</p> {/* Dollar value */}
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Collections:</span>
              <span className="text-blue-600">$300</span> {/* Collections Amount */}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="font-semibold text-gray-700">Remainings:</span>
              <span className="text-red-600">$200</span> {/* Remaining Amount */}
            </div>
          </div>
        </div>
      </div>
      
    );
  };

  export default StatisticsChartWithBox;
