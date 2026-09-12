import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const response = await axios.post(
      "https://zerodha-clones-7rvl.onrender.com/api/auth/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

      localStorage.setItem("token", response.data.token);

      alert("Login successful!");

      window.location.href = "https://zerodha-dashboard-x0wa.onrender.com";    } catch (error) {
      alert(error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Welcome back</h1>

        <p className="login-subtitle">
          Login to your Zerodha account
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

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;