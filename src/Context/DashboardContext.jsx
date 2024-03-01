import React, { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
const DashboardContext = createContext();
import { url } from "../Assets/Utils";
import AuthContext from "./Authentication/AuthContext";

export const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState("");
  const { token } = useContext(AuthContext);

  const dashboard = async () => {
    const response = await axios.get(`${url}/dashboard/get_dashboard`, {
      headers: { Authorization: `${token}` },
    });
    setDashboardData(response.data);
    console.log(dashboardData);
    console.log("hii");
  };
  useEffect(() => {
    if (token) dashboard();
  }, [token]);
  
  return (
    <DashboardContext.Provider value={{ dashboard, dashboardData }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
