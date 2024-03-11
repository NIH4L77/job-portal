
import React, { useState } from "react";
import email from '../Components/Assets/person.png';
import password from '../Components/Assets/password.png';
import person from '../Components/Assets/email.png';
import './LoginPage.css';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const[action,setAction]=useState('Login');
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Add your form submission logic here
  };
    
    
  
  return (
    <div>
      <div className="login-container">
        <div className="signup-form">
          <h2>{action}</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              {action==="Login"?<div></div>:<div className="input">
              <img src={email} alt="usericon"></img>
              <input type="text"   placeholder="Name"/>
            </div>}
            
            <div className="input">
              <img src={person} alt="emailicon"></img>
              <input type="email"  placeholder="Email Id"/>
            </div>

            <div className="input">
              <img src={password} alt="passicon"></img>
              <input type="password"  placeholder="Password"/>
            </div>

            <div className="span-container">Forgot password?<span id="span">click here</span></div>

            <div className="submit-container">
            <button type="submit" className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
            <button type="submit"className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</button>
            </div>
           
            </div>

            

          </form>
         
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
