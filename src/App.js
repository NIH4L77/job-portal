import React from 'react';
import Header from './Components/Header'; // Assuming components are in a 'Components' folder
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Search from './Components/Search';
import Trending from './Components/Trending';
import Content from './Components/Content';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import CandidateProfile from './Components/CandidateProfile';

function App() {
  return (
    <BrowserRouter>  {/* Wrap the entire application with BrowserRouter */}
      {/* <div className="app">
        <Header />
        <Hero />
        <Search />
        <Trending />
        <Content />
        <Footer />
      </div> */}
      {/* <CandidateProfile></CandidateProfile> */}
      <SignIn
    </BrowserRouter>
  );
}

export default App;
