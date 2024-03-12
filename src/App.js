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
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Uncomment components as needed */}
        {/* <HomePage /> */}
        {/* <LoginPage /> */}
        {/* <CandidateProfile /> */}

        <Header />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;


