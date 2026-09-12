import React from "react";
import axios from "axios";
import Menu from "./Menu";

const TopBar = () => {
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3002/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      window.location.href = "http://localhost:5173/login";
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