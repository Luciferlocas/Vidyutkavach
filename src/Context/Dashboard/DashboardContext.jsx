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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [component, setComponent] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    socket.on("component_stream", (data) => {
      setComponent(data);
    });
  }, [socket]);

  const dashboard = async () => {
    try {
      const res = await axios.get(`${url}/dashboard/get_dashboard`, {
        headers: { Authorization: `${token}` },
      });
      if (res.data.success) {
        setdashboardData(res.data);
        setData(res.data.weekly_data.data);
        setStatus(res.data.grid_status.data);
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
        component,
        status
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
