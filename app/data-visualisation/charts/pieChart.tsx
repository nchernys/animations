"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

ChartJS.defaults.font.family = "Quicksand, sans-serif";

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 2000,
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Key Partners",
    },
  },
};

const PieChart = () => {
  const [currentDataSet, setCurrentDataSet] = useState(0);

  const dataSets = [
    [10, 25, 45, 30, 40],
    [35, 20, 20, 15, 55],
    [50, 30, 45, 20, 5],
    [10, 70, 5, 10, 65],
    [5, 5, 15, 70, 5],
  ];

  const data = {
    labels: ["USA", "France", "Portugal", "Canada", "Netherlands"],
    datasets: [
      {
        label: "",
        data: dataSets[currentDataSet],
        backgroundColor: [
          "rgb(255, 0, 247)",
          "rgb(0, 183, 255)",
          "rgb(255, 177, 10)",
          "rgb(36, 218, 0)",
          "rgb(115, 0, 255)",
        ],
        borderColor: "rgb(45, 45, 45)",
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDataSet((prevIndex) => (prevIndex + 1) % dataSets.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [dataSets]);

  return <Pie data={data} options={options} />;
};

export default PieChart;
