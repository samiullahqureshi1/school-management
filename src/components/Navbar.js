import React, { useState } from 'react';
import { FaBars, FaSearch, FaTimes, FaShoppingCart, FaEnvelope, FaBell, FaCog, FaUserGraduate, FaBook, FaChalkboardTeacher, FaUsers, FaWallet, FaMoneyBill, FaClipboardList, FaCalendarAlt, FaPen, FaEye, FaStore } from 'react-icons/fa';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Navbar = ({ toggleSidebar }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isClassesExpanded, setIsClassesExpanded] = useState(false);
  const [subjectExpand, setSubjectExpand] = useState(false);
  const [studentExpand, setStudentExpand] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isSearchVisible) {
      setSearchQuery('');
    }
  };

  const handleSearchClose = () => {
    setIsSearchVisible(false);
    setSearchQuery('');
  };

  const handleClassesToggle = () => {
    setIsClassesExpanded(!isClassesExpanded);
  };

  const handleSubject = () => {
    setSubjectExpand(!subjectExpand);
  };

  const handleStudentToggle = () => {
    setStudentExpand(!studentExpand);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-gray-800 p-4 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <button className="text-white md:hidden" onClick={handleMenuToggle}>
            <FaBars className="text-2xl" />
          </button>
          <img src={logo} alt="Logo" className="w-10 h-10 mr-4 ml-2" />
          
          {!isSearchVisible && (
            <FaSearch className="text-white text-xl cursor-pointer hover:text-gray-400" onClick={handleSearchClick} />
          )}

          {isSearchVisible && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search students"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-700 text-white rounded-full px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                onClick={() => {
                  console.log('Searching for:', searchQuery);
                }}
              >
                <FaSearch />
              </button>
              <FaTimes
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer hover:text-gray-400"
                onClick={handleSearchClose}
              />
            </div>
          )}
        </div>

        {/* App Store and Notifications */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1.5 rounded-full text-sm font-semibold cursor-pointer hover:bg-blue-600 transition duration-200 ease-in-out">
              <SiAppstore className="mr-2" />
              <div>
                <div className="text-xs">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </span>

            <span className="flex items-center bg-gradient-to-r from-purple-500 to-purple-700 text-white px-3 py-1.5 rounded-full text-sm font-semibold cursor-pointer hover:bg-purple-600 transition duration-200 ease-in-out">
              <SiGoogleplay className="mr-2" />
              <div>
                <div className="text-xs">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <FaShoppingCart className="text-white text-xl cursor-pointer hover:text-gray-400" />
            <FaEnvelope className="text-white text-xl cursor-pointer hover:text-gray-400" />
            <FaBell className="text-white text-xl cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed left-0 top-16 w-64 h-[calc(100%_-_64px)] bg-gray-100 shadow-lg p-4 overflow-y-auto transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <h2 className="text-sm font-bold mb-2">Menu</h2>
        <ul className="mt-4">
          {/* Dashboard */}
          <li className="py-2 flex items-center">
            <FaCog className="mr-3 text-gray-600" />
            <NavLink to="/dashboard" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
              Dashboard
            </NavLink>
          </li>
            <li className="py-2 flex items-center">
              <FaCog className="mr-3 text-gray-600" />
              <NavLink to="/settings" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                General Settings
              </NavLink>
            </li>
            <li className="py-2 flex items-center" onClick={handleClassesToggle}>
              <FaChalkboardTeacher className="mr-3 text-gray-600" />
              <span className="block text-gray-800 hover:text-blue-600 transition duration-200 cursor-pointer">
                Classes
              </span>
              
            </li>
            {isClassesExpanded && (
              <ul className="ml-4 mt-2">
                <li className="py-1 flex items-center">
                  <NavLink to="/classes/all" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                    All Classes
                  </NavLink>
                </li>
                <li className="py-1 flex items-center">
                  <NavLink to="/classes/new" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                    New Classes
                  </NavLink>
                </li>
              </ul>
            )}
            <li className="py-2 flex items-center" onClick={handleSubject}>
              <FaBook className="mr-3 text-gray-600" />
              <span  className="block text-gray-800 hover:text-blue-600 transition duration-200 cursor-pointer">
                Subjects
              </span>
            </li>
            {subjectExpand && (
              <ul className="ml-4 mt-2">
                <li className="py-1 flex items-center">
                  <NavLink to="/getRecords" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                    Classes with Subjects
                  </NavLink>
                </li>
                <li className="py-1 flex items-center">
                  <NavLink to="/asignSubjects" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                    Assign Subject
                  </NavLink>
                </li>
              </ul>
            )}
     {/* Student Menu */}
     <li className="py-2 flex items-center" onClick={handleStudentToggle}>
              <FaUserGraduate className="mr-3 text-gray-600" />
              <span className="block text-gray-800 hover:text-blue-600 transition duration-200 cursor-pointer">
                Students
              </span>
            </li>
            {studentExpand && (
              <ul className="ml-4 mt-2">
                <li className="py-1 flex items-center">
                  <NavLink to="/students/all" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                    All Students
                  </NavLink>
                </li>
                <li className="py-1 flex items-center">
                  <NavLink to="/add-new-student" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                    Add New Student
                  </NavLink>
                </li>
                <li className="py-1 flex items-center">
                  <NavLink to="/students/add" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                    Add New Admission
                  </NavLink>
                </li>
                <li className="py-1 flex items-center">
                  <NavLink to="/students/id-cards" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                    Student ID Cards
                  </NavLink>
                </li>
                <li className="py-1 flex items-center">
                  <NavLink to="/students/promote" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                    Promote Student
                  </NavLink>
                </li>
              </ul>
            )}        <li className="py-2 flex items-center">
              <FaUsers className="mr-3 text-gray-600" />
              <NavLink to="/employees" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                Employees
              </NavLink>
            </li>
            <li className="py-2 flex items-center">
              <FaWallet className="mr-3 text-gray-600" />
              <NavLink to="/accounts" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                Accounts
              </NavLink>
            </li>
            <li className="py-2 flex items-center">
              <FaMoneyBill className="mr-3 text-gray-600" />
              <NavLink to="/fees" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                Fees
              </NavLink>
            </li>
            <li className="py-2 flex items-center">
              <FaClipboardList className="mr-3 text-gray-600" />
              <NavLink to="/attendance" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                Attendance
              </NavLink>
            </li>
            <li className="py-2 flex items-center">
              <FaCalendarAlt className="mr-3 text-gray-600" />
              <NavLink to="/events" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                Events
              </NavLink>
            </li>
            <li className="py-2 flex items-center">
              <FaPen className="mr-3 text-gray-600" />
              <NavLink to="/exams" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                Exams
              </NavLink>
            </li>
            <li className="py-2 flex items-center">
              <FaEye className="mr-3 text-gray-600" />
              <NavLink to="/results" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                Results
              </NavLink>
            </li>
            <li className="py-2 flex items-center">
              <FaStore className="mr-3 text-gray-600" />
              <NavLink to="/library" className="block text-gray-800 hover:text-blue-600 transition duration-200" activeClassName="text-blue-600 font-bold">
                Library
              </NavLink>
            </li>
          </ul>
        </div>
   
    </div>
  );
};

export default Navbar;
