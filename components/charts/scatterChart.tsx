"use client";
import { useState, useEffect } from "react";
import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);
ChartJS.defaults.font.family = "Quicksand, sans-serif";
ChartJS.defaults.font.size = 16;

const dataSets1 = [
  [
    { x: 20, y: 81 },
    { x: 30, y: 84 },
    { x: 40, y: 68 },
    { x: 50, y: 52 },
    { x: 60, y: 33 },
    { x: 70, y: 12 },
    { x: 80, y: 2 },
  ],
  [
    { x: 20, y: 5 },
    { x: 30, y: 15 },
    { x: 40, y: 48 },
    { x: 50, y: 52 },
    { x: 60, y: 73 },
    { x: 70, y: 82 },
    { x: 80, y: 60 },
  ],
];

const dataSets2 = [
  [
    { x: 20, y: 65 },
    { x: 30, y: 80 },
    { x: 40, y: 74 },
    { x: 50, y: 41 },
    { x: 60, y: 33 },
    { x: 70, y: 14 },
    { x: 80, y: 5 },
  ],
  [
    { x: 20, y: 45 },
    { x: 30, y: 70 },
    { x: 40, y: 64 },
    { x: 50, y: 21 },
    { x: 60, y: 53 },
    { x: 70, y: 34 },
    { x: 80, y: 45 },
  ],
];

const textY = ["Sports Activities", "Vegans"];

const ScatterChart = () => {
  const [currentDataSet, setCurrentDataSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDataSet((prevIndex) => (prevIndex + 1) % dataSets1.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [dataSets1, dataSets2]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Sports & Foods by Age",
      },
    },
    scales: {
      x: {
        type: "linear" as const,
        position: "bottom" as const,
        grid: {
          display: true,
          color: "rgba(200, 200, 200, .2)",
        },
        title: {
          display: true,
          text: "Age",
        },
      },
      y: {
        grid: {
          display: true,
          color: "rgba(200, 200, 200, .2)",
        },
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
        title: {
          display: true,
          text: textY[currentDataSet],
        },
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "2000",
        data: dataSets1[currentDataSet],
        backgroundColor: "rgb(54, 163, 235)",
        pointRadius: 8,
      },
      {
        label: "2004",
        data: dataSets2[currentDataSet],
        backgroundColor: "rgb(255, 99, 133)",
        pointRadius: 8,
      },
    ],
  };

  return <Scatter data={data} options={options} />;
};

export default ScatterChart;
