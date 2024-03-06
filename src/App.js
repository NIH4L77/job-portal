// import logo from './logo.svg';
// import './App.css';
// import NavBar from './Components/Navbar';
// import LoginPage from './Components/LoginPage';
import React from 'react';
import SignInSignUpPage from './Components/SignInSignUpPage';
import CandidateProfile from './Components/CandidateProfile';
import './Components/Style/style.css'

function App() {
  return (
    <div className='App'>
      {/* //<NavBar></NavBar>
    //<LoginPage></LoginPage> */}
     <header className='App-header'>
     <h1>Welcome to Our Job Portal</h1>
     </header>
     <main>
      {/* <SignInSignUpPage></SignInSignUpPage> */}
  <CandidateProfile></CandidateProfile>
     </main>

    </div>
   
  );
}

export default App;
