import React, { useState } from 'react';
import Navbar from './Navbar';
import DashboardCards from './DashboardCard';
import DashboardFooter from './DashboardFooter';
import StatisticsChart from './ChartComponent';
import TodayAbsentStudents from './Absent';
import FreeSms from './sms';
import StatusBox from './Statusbox';
import TodayPresentStudents from './Present';

function Dashboard() {
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

export default Dashboard;
