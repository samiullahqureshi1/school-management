import React  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from "react";
import Navbar from "./components/Navbar";
import AddClass from "./components/AddNewClasses";
import SubjectForm from "./components/Subject";
import AllClasses from "./components/AllClasssesRecord";
import GetRecord from "./components/ClassesWithSubject";
import AllStudents from "./components/AllStudents";
import AddStudents from "./components/AddStudents";
import SearchStudents from "./components/promote";
import SearchAndAdd from "./components/AllEmployee";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };
  return (
    <Router>
      {/* Render Navbar if the current path is not the Login path */}
      {window.location.pathname !== '/' && window.location.pathname!=='/register' && <Navbar toggleSidebar={toggleSidebar} />}
      <div className={`flex ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>

      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/classes/new" element={<AddClass />} />
        <Route path="/asignSubjects" element={<SubjectForm />} />
        <Route path="/classes/all" element={<AllClasses />} />        
        <Route path="/getRecords" element={<GetRecord />} />        
        <Route path="/students/all" element={<AllStudents />} />
        <Route path="/add-new-student" element={<AddStudents />} />
        <Route path="/students/promote" element={<SearchStudents />} />
        <Route path="/employees" element={<SearchAndAdd />} />

      </Routes>
    </Router>
  );
}

export default App;
