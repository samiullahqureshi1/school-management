import React, { useState } from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaEnvelope, FaBell } from 'react-icons/fa';
import { SiAppstore, SiGoogleplay } from 'react-icons/si'; // Import icons for stores
import logo from '../images/logo.jpg'; // Adjust the path as needed

const Navbar = ({ toggleSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleSidebar();
  };

  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-800 p-4 fixed top-0 left-0 right-0 z-50">
        {/* Logo and Menu */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 mr-4"
          />
          <FaBars
            className="text-white text-xl mr-4 cursor-pointer hover:text-gray-400"
            onClick={handleToggleSidebar}
          />
          <FaSearch className="text-white text-xl cursor-pointer hover:text-gray-400" />
        </div>

        {/* App Store and Play Store Buttons */}
        <div className="flex items-center space-x-4">
          {/* App Store Button */}
          <span className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1.5 rounded-full text-sm font-semibold cursor-pointer hover:bg-blue-600 transition duration-200 ease-in-out">
            <SiAppstore className="mr-2" />
            <div>
              <div className="text-xs">Download on the</div>
              <div className="font-bold">App Store</div>
            </div>
          </span>

          {/* Play Store Button */}
          <span className="flex items-center bg-gradient-to-r from-purple-500 to-purple-700 text-white px-3 py-1.5 rounded-full text-sm font-semibold cursor-pointer hover:bg-purple-600 transition duration-200 ease-in-out">
            <SiGoogleplay className="mr-2" />
            <div>
              <div className="text-xs">Get it on</div>
              <div className="font-bold">Google Play</div>
            </div>
          </span>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <FaShoppingCart className="text-white text-xl cursor-pointer hover:text-gray-400" />
            <FaEnvelope className="text-white text-xl cursor-pointer hover:text-gray-400" />
            <FaBell className="text-white text-xl cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed left-0 top-16 w-64 h-[calc(100%_-_64px)] bg-white shadow-lg p-4 overflow-y-auto">
          <h2 className="text-lg font-bold">Menu</h2>
          <ul className="mt-4">
            <li className="py-2">Dashboard</li>
            <li className="py-2">General Settings</li>
            <li className="py-2">Classes</li>
            <li className="py-2">Subjects</li>
            <li className="py-2">Students</li>
            <li className="py-2">Employees</li>
            <li className="py-2">Accounts</li>
            <li className="py-2">Fees</li>
            <li className="py-2">Salary</li>
            <li className="py-2">Attendance</li>
            <li className="py-2">Timetable</li>
            <li className="py-2">Homework</li>
            <li className="py-2">Behaviour & Skills</li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="relative mt-16 ml-64"> {/* Adjust margin-left for sidebar */}
        {/* Free SMS Component */}
        <div className="absolute right-11 top-[-200px] bg-[#E1F5FE] shadow-md rounded-lg p-4 w-[28.5%]">
          <h3 className="text-lg font-semibold text-[#0D47A1]">Free SMS Gateway</h3>
          <p className="text-sm text-[#0D47A1]">Send Unlimited Free SMS on Mobile Numbers.</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
