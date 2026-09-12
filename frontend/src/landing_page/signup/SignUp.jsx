import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
     "https://zerodha-clones-7rvl.onrender.com/api/auth/signup",
      {
        email,
        username,
        password,
      },
      {
        withCredentials: true,
      }
    );
      localStorage.setItem("token", response.data.token);

      alert("Signup successful!");

      setEmail("");
      setUsername("");
      setPassword("");

      window.location.href = "https://zerodha-dashboard-x0wa.onrender.com";
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h1>Create your account</h1>

        <p className="signup-subtitle">
          Start investing with Zerodha
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;