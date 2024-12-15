"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.font.family = "Quicksand, sans-serif";
ChartJS.defaults.font.size = 16;
ChartJS.defaults.color = "#fff";

// Sample data for the chart

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1000,
  },
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 80,
      ticks: {
        stepSize: 10,
      },
      grid: {
        color: "rgba(200, 200, 200, .2)",
      },
    },
    x: {
      beginAtZero: true,
      grid: {
        display: true,
        color: "rgba(200, 200, 200, .2)",
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Company's Growth",
    },
  },
  font: {
    family: "Quicksand, sans-serif",
    size: 20,
    weight: 600,
    lineHeight: 1.5,
  },
};

const BarChart = () => {
  const [currentDataSet, setCurrentDataSet] = useState(0);

  const dataSets = [
    [10, 15, 30, 80, 50],
    [20, 25, 40, 50, 80],
    [10, 80, 60, 20, 40],
    [15, 10, 30, 75, 60],
    [5, 33, 21, 44, 10],
  ];

  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Customers",
        data: dataSets[currentDataSet],
        backgroundColor: "rgb(79, 75, 192)",
        hoverBackgroundColor: "rgb(52, 160, 255)",
        borderWidth: 3,
        borderRadius: 1000,
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDataSet((prevIndex) => (prevIndex + 1) % dataSets.length);
    }, 2000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [dataSets]);

  return <Bar data={chartData} options={options} />;
};
export default BarChart;
