import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("https://zerodha-clones-7rvl.onrender.com/api/protected", {
          withCredentials: true,
        });

        setAuthorized(true);
      } catch (error) {
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authorized) {
    window.location.href = "https://zerodha-frontend-56tq.onrender.com/login";
    return null;
  }

  return children;
}

export default ProtectedRoute;