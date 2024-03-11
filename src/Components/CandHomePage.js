import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function CandHomePage () {
  const [showLoginPage, setShowLoginPage]=useState(false);

     const handleCandidatesClick = () => {
        
        setShowLoginPage(true);
    };

    
  return (
    <div className="homepage">
      <h1>Welcome to Your Job Application Dashboard</h1>
      <p>Track your job applications and manage your job search effectively.</p>
      <div>
            <button onClick={handleCandidatesClick} id="btn2">Candidates</button>
        </div>
      <div className="dashboard-links">
        <a href="/applications" className="dashboard-link">
          View Applications
        </a><br></br>
        <a href="/profile" className="dashboard-link">
          View Profile
        </a><br></br>
        <a href="/settings" className="dashboard-link">
          Settings
        </a>
      </div>
    </div>
  );
};

export default CandHomePage;
