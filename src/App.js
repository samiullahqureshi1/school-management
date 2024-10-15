import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DashboardCards from './components/DashboardCard';
import DashboardFooter from './components/DashboardFooter';
import StatisticsChart from './components/ChartComponent';
import TodayAbsentStudents from './components/Absent';
import FreeSms from './components/sms';
import StatusBox from './components/Statusbox';
import TodayPresentStudents from './components/Present';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className={`flex ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
        {/* Main Content */}
        <div className="w-full">
          <DashboardCards isSidebarOpen={isSidebarOpen} />
          <DashboardFooter />
          <StatisticsChart />
         
          <StatusBox />
          <TodayAbsentStudents />
          <TodayPresentStudents />
        </div>
      </div>
    </>
  );
}

export default App;
