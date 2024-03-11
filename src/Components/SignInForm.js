import React, { useState } from 'react';

const SignUpForm = ({ onSignUp }) => {
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    fullname: '',
    unit: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSignUp(signUpData);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signUpData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signUpData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={signUpData.fullname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="unit"
          placeholder="Unit Number"
          value={signUpData.unit}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;