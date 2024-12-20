import React, { useContext } from "react";
import AuthContext from "../../Context/Authentication/AuthContext";
import moment from "moment";
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

const DashChart = ({ data }) => {
  const { theme } = useContext(AuthContext);
  const label = new Set();
  const w = window.innerWidth;

  data.forEach(item => {
    item.metrics.forEach(metric => {
      if (metric.from) {
        label.add(moment(metric.from).format("DD/MM/YYYY"));
      }
    });
  });

  const colors = theme
    ? ["white", "orange", "blue"]
    : ["black", "orange", "blue"];
  const labels = Array.from(label);
  const datasets = data.map((entry, i) => ({
    label: entry.name.charAt(0).toUpperCase() + entry.name.slice(1),
    data: entry.metrics.map((metric) => metric.value),
    borderColor: colors[i],
    tension: 0.3,
    fillColor:"blue",
    borderWidth: 1,
    backgroundColor: "transparent",
    pointRadius: 2,
  }));

  const chartData = {
    labels,
    datasets: datasets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      fillColor: dataset.fill,
      borderColor: dataset.borderColor,
      tension: dataset.tension,
      borderWidth: dataset.borderWidth,
      backgroundColor: dataset.backgroundColor,
      pointRadius: dataset.pointRadius,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: (w || 1536) > 786 ? true : false,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: `-----Date-----`,
          font: {
            size: (w || 1536) > 786 ? 12 : 8,
          },
        },
        ticks: {
          font: {
            size: (innerWidth || 1536) > 786 ? 12 : 8,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: `-----Power-----`,
          font: {
            size: (w || 1536) > 786 ? 12 : 8,
          },
        },
        ticks: {
          font: {
            size: (innerWidth || 1536) > 786 ? 12 : 8,
          },
        },
      },
    },
  };

  return <Line className="min-h-52" options={options} data={chartData} />;
};

export default DashChart;
