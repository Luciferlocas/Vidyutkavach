import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { url } from "../../Assets/Utils";
import toast from "react-hot-toast";
import AuthContext from "../Authentication/AuthContext";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [dashboardData, setdashboardData] = useState([]);

  const dashboard = async () => {
    try {
      const res = await axios.get(`${url}/dashboard/get_dashboard`, {
        headers: { Authorization: `${token}` },
      });
      if (res.data.success) {
        setdashboardData(res.data);
      }
    } catch {
      toast.error("Error occured while fetching");
    }
  };

  useEffect(() => {
    if (token) dashboard();
  }, [token]);

  return (
    <DashboardContext.Provider
      value={{
        dashboardData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
