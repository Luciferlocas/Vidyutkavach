import React, { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { url } from "../Assets/Utils";
import AuthContext from "./Authentication/AuthContext";
import axios from "axios";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState("");
  const { token } = useContext(AuthContext);

  const dashboard = async () => {
    try {
      const response = await axios.get(`${url}/dashboard/get_dashboard`, {
        headers: { Authorization: token },
      });
      if (response.data.success) {
        setDashboardData(response.data);
      } else {
        console.error("Dashboard data retrieval failed:", response.data.error);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    if (token) dashboard();
  }, [token]);

  return (
    <DashboardContext.Provider value={{ dashboardData }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
