import React, { useState } from "react";
import "./Style/SignInSignUp.css";

const AuthForm = ({ title, onSubmit, data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
      />
      <button type="submit">{title}</button>
    </form>
  );
};

const SignInSignUpPage = () => {
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({ email: "", password: "" });

  const handleSignIn = (signInData) => {
    console.log("Signing in...", signInData);
  };

  const handleSignUp = (signUpData) => {
    console.log("Signing up...", signUpData);
  };

  return (
    <div className="main-content">
      <div className="sign-in-sign-up-container">
        <AuthForm
          title="Sign In"
          onSubmit={handleSignIn}
          data={signInData}
          setData={setSignInData}
        />
        <AuthForm
          title="Sign Up"
          onSubmit={handleSignUp}
          data={signUpData}
          setData={setSignUpData}
        />
      </div>
    </div>
  );
};

export default SignInSignUpPage;