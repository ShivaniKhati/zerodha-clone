import React from "react";
import axios from "axios";
import Menu from "./Menu";

const TopBar = () => {
  const handleLogout = async () => {
    try {
      await axios.post(
        "https://zerodha-clones-7rvl.onrender.com/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      window.location.href =  "https://zerodha-frontend-56tq.onrender.com/login";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>

        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default TopBar;