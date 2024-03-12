import React, { useState } from "react";
import "./HomePage.css";
import LoginPage from "./LoginPage";

function HomePage() {
    const [showLoginPage, setShowLoginPage] = useState(false);

    const handleButtonClick = () => {
        setShowLoginPage(true);
    };

    if (showLoginPage) {
        return <LoginPage />;
    }

    return (
        <div className="container">
            <h1 className="title">What are you looking for?</h1>
            <button className="button" onClick={handleButtonClick}>HR</button>
            <button className="button" onClick={handleButtonClick}>Candidates</button>
        </div>
    );
}

export default HomePage;
