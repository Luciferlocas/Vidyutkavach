import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { url } from "../../Assets/Utils";
import toast from "react-hot-toast";
import AuthContext from "../Authentication/AuthContext";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  // const socket = new WebSocket("ws://ws.anaskhan.site:5000/ws");
  const res = {
    success: true,
    utility_status: {
      success: true,
      data: "inactive",
    },
    grid_status: {
      success: true,
      data: [
        {
          _id: "input",
          totalValue: 15,
        },
        {
          _id: "storage",
          totalValue: 97,
        },
        {
          _id: "output",
          totalValue: 3,
        },
      ],
    },
    weekly_data: {
      success: true,
      data: [
        {
          metrics: [
            {
              value: 4,
              from: "2023-12-16T00:00:00.000Z",
              to: "2023-12-16T23:59:59.999Z",
            },
            {
              value: 2,
              from: "2023-12-17T00:00:00.000Z",
              to: "2023-12-17T23:59:59.999Z",
            },
            {
              value: 3,
              from: "2023-12-18T00:00:00.000Z",
              to: "2023-12-18T23:59:59.999Z",
            },
          ],
          totalWeeklyValue: 9,
          name: "battery",
        },
        {
          metrics: [
            {
              value: 2.5,
              from: "2023-12-16T00:00:00.000Z",
              to: "2023-12-16T23:59:59.999Z",
            },
            {
              value: 2,
              from: "2023-12-17T00:00:00.000Z",
              to: "2023-12-17T23:59:59.999Z",
            },
            {
              value: 2,
              from: "2023-12-18T00:00:00.000Z",
              to: "2023-12-18T23:59:59.999Z",
            },
          ],
          totalWeeklyValue: 7,
          name: "wind turbines plants",
        },
        {
          metrics: [
            {
              value: 3,
              from: "2023-12-16T00:00:00.000Z",
              to: "2023-12-16T23:59:59.999Z",
            },
            {
              value: 2,
              from: "2023-12-17T00:00:00.000Z",
              to: "2023-12-17T23:59:59.999Z",
            },
            {
              value: 2,
              from: "2023-12-18T00:00:00.000Z",
              to: "2023-12-18T23:59:59.999Z",
            },
          ],
          totalWeeklyValue: 7,
          name: "residential",
        },
        {
          metrics: [
            {
              value: 1,
              from: "2023-12-16T00:00:00.000Z",
              to: "2023-12-16T23:59:59.999Z",
            },
            {
              value: 4,
              from: "2023-12-17T00:00:00.000Z",
              to: "2023-12-17T23:59:59.999Z",
            },
            {
              value: 5,
              from: "2023-12-18T00:00:00.000Z",
              to: "2023-12-18T23:59:59.999Z",
            },
          ],
          totalWeeklyValue: 7,
          name: "industrial",
        },
        {
          metrics: [
            {
              value: 0,
              from: "2023-12-16T00:00:00.000Z",
              to: "2023-12-16T23:59:59.999Z",
            },
            {
              value: 3,
              from: "2023-12-17T00:00:00.000Z",
              to: "2023-12-17T23:59:59.999Z",
            },
            {
              value: 3,
              from: "2023-12-18T00:00:00.000Z",
              to: "2023-12-18T23:59:59.999Z",
            },
          ],
          totalWeeklyValue: 7,
          name: "solar plants",
        },
        {
          metrics: [
            {
              value: 1.5,
              from: "2023-12-16T00:00:00.000Z",
              to: "2023-12-16T23:59:59.999Z",
            },
            {
              value: 2,
              from: "2023-12-17T00:00:00.000Z",
              to: "2023-12-17T23:59:59.999Z",
            },
            {
              value: 4,
              from: "2023-12-18T00:00:00.000Z",
              to: "2023-12-18T23:59:59.999Z",
            },
          ],
          totalWeeklyValue: 7,
          name: "commercial",
        },
        {
          metrics: [
            {
              value: 3,
              from: "2023-12-16T00:00:00.000Z",
              to: "2023-12-16T23:59:59.999Z",
            },
            {
              value: 4,
              from: "2023-12-17T00:00:00.000Z",
              to: "2023-12-17T23:59:59.999Z",
            },
            {
              value: 6,
              from: "2023-12-18T00:00:00.000Z",
              to: "2023-12-18T23:59:59.999Z",
            },
          ],
          totalWeeklyValue: 3,
          name: "utility",
        },
      ],
    },
    active_components: {
      success: true,
      data: [
        {
          activeCount: 0,
          typeName: "utility",
        },
        {
          activeCount: 2,
          typeName: "commercial",
        },
        {
          activeCount: 2,
          typeName: "solar plants",
        },
        {
          activeCount: 2,
          typeName: "industrial",
        },
        {
          activeCount: 2,
          typeName: "residential",
        },
        {
          activeCount: 2,
          typeName: "battery",
        },
        {
          activeCount: 2,
          typeName: "wind turbines plants",
        },
      ],
    },
    ids: "active",
    firewall: "active",
    honeypot: {
      total: 3,
      active: 3,
      detections: 5,
    },
    co2_emission: {
      vslue: 90,
      unit: "kg/MWh",
    },
    energy_efficiency: {
      value: 90,
      unit: "%",
    },
    security_alerts: [
      {
        id: 1,
        is_read: false,
        timestamp: "2023-12-17T04:26:04.643+00:00",
        ip: "192.168.1.105",
        description: "Detected attempt to perform SQL injection",
      },
      {
        id: 2,
        is_read: false,
        timestamp: "2023-12-17T04:26:04.643+00:00",
        ip: "192.168.1.215",
        description: "Suspicious script detected in input",
      },
      {
        id: 3,
        is_read: false,
        timestamp: "2023-12-17T04:26:04.643+00:00",
        ip: "192.168.1.135",
        description: "Multiple failed login attempts",
      },
      {
        id: 4,
        is_read: false,
        timestamp: "2023-12-17T04:26:04.643+00:00",
        ip: "192.168.1.185",
        description: "System configuration changed",
      },
      {
        id: 5,
        is_read: false,
        timestamp: "2023-12-17T04:26:04.643+00:00",
        ip: "192.168.1.250",
        description: "Detected attempt to spoof DNS responses",
      },
    ],
  };

  const { token } = useContext(AuthContext);
  const [dashboardData, setdashboardData] = useState(res);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(res.weekly_data.data);
  const [component, setComponent] = useState([]);
  const [status, setStatus] = useState(res.grid_status.data);
  const [stats, setStats] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("http://ws.anaskhan.site:5000/status");
  //       if (res.status === 200) setStats(res.data.status);
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const turnOn = async () => {
  //   try {
  //     const res = await axios.post(
  //       `http://ws.anaskhan.site:5000/status/${!stats + 0}`
  //     );
  //   } catch (error) {
  //     toast.error(error.message);
  //   } finally {
  //     setStats(!stats ? 1 : 0);
  //   }
  // };

  useEffect(() => {
    const setUpEventListener = () => {
      if (stats === 1) {
        const handleMessage = (e) => {
          const newData = JSON.parse(e.data);
          setComponent((prevComponents) => {
            const existingIndex = prevComponents.findIndex(
              (item) => item.componentID === newData.componentID
            );
            if (existingIndex !== -1) {
              const updatedComponents = [...prevComponents];
              updatedComponents[existingIndex] = newData;
              return updatedComponents;
            } else {
              return [...prevComponents, newData];
            }
          });
        };
        socket.onmessage = handleMessage;
      } else {
        socket.onmessage = null;
      }
    };
    setUpEventListener();

    return () => {
      socket.onmessage = null;
    };
  }, [stats]);

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
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (token) dashboard();
  // }, [token]);

  return (
    <DashboardContext.Provider
      value={{
        dashboardData,
        data,
        loading,
        component,
        status,
        stats,
        // turnOn,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
