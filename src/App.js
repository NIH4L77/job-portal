import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import CandidateProfile from './Components/CandidateProfile';
import Hero from './Components/Hero';
import Search from './Components/Search';
import Header from './Components/Header';
import Content from './Components/Content';
import Trending from './Components/Trending';
import Content from './Components/Content';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing

function App() {
  return (
    <BrowserRouter>  {/* Wrap the entire application with BrowserRouter */}
      <div className="app">
        <Header />
        <Hero />
        <Search />
        <Trending />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


