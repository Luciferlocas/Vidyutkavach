import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { url } from "../../Assets/Utils";
import toast from "react-hot-toast";
import AuthContext from "../Authentication/AuthContext";
import { io } from "socket.io-client";

const DashboardContext = createContext();
const socket = io("http://home.anaskhan.site:3453");

export const DashboardProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [dashboardData, setdashboardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [component, setComponent] = useState([]);

  useEffect(() => {
    socket.on("component_stream", (data) => {
      setComponent(data);
    });
  }, [socket]);

  const dashboard = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${url}/dashboard/get_dashboard`, {
        headers: { Authorization: `${token}` },
      });
      if (res.data.success) {
        setdashboardData(res.data);
        setData(res.data.weekly_data.data);
      }
    } catch (error) {
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) dashboard();
  }, [token]);

  return (
    <DashboardContext.Provider
      value={{
        dashboardData,
        data,
        loading,
        component
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
