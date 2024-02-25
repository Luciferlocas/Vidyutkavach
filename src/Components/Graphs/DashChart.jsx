import React, { useContext } from "react";
import AuthContext from "../../Context/Authentication/AuthContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashChart = () => {
  const { theme } = useContext(AuthContext);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: `----- Date -----`,
        },
      },
      y: {
        title: {
          display: true,
          text: `----- Power -----`,
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Solar - 30KW",
        data: [7, 49, 9, 10, 1, 12, 13],
        borderColor: `${theme ? "white" : "black"}`,
        tension: 0.3,
        borderWidth: 1,
        backgroundColor: "transparent",
        pointRadius: 2,
      },
      {
        label: "Wind - 25KW",
        data: [44, 32, 2, 34, 5, 56, 32],
        borderColor: "#FC870D",
        tension: 0.3,
        borderWidth: 1,
        backgroundColor: "transparent",
        pointRadius: 2,
      },
      {
        label: "Grid - 20KW",
        data: [0, 6, 5, 4, 3, 2, 25],
        borderColor: "blue",
        tension: 0.3,
        borderWidth: 1,
        backgroundColor: "transparent",
        pointRadius: 2,
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default DashChart;
