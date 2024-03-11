"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, Tooltip, LinearScale, Legend);
function BarChart({ height, width }) {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ].map((ele) => ele.slice(0, 3)),
    datasets: [
      {
        data: [3, 10, 6, 8, 7, 9, 2, 4, 5, 6, 7, 8],
        backgroundColor: "#6CCBF2",
        barThickness: 5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          color: "#E028AC",
          width: 3,
        },
      },
      y: {
        grid: {
          display: false,
        },
        offset: true,
        border: {
          color: "#E028AC",
          width: 3,
        },
      },
    },
  };
  return (
    <div className="h-auto">
      <Bar data={data} options={options} />
    </div>
  );
}
export default BarChart;
