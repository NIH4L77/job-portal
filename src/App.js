import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import HeaderNav from './Components/HeaderNav';
import CandHomePage from './Components/CandHomePage';




function App() {
  return (
    <Router>
      <div>
      {<HeaderNav></HeaderNav> }
      
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/' element={<CandHomePage />} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;


