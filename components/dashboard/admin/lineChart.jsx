import React from "react";
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Users Line Chart",
    },
  },
};

const generateMonthlyLabels = (count) => {
  const months = [];
  const currentDate = new Date();

  for (let i = 0; i < count; i++) {
    const month = currentDate.getMonth() - i;
    const year = currentDate.getFullYear();
    months.unshift(new Date(year, month, 1));
  }

  return months;
};

const labels = generateMonthlyLabels(7);

const data = {
  labels: labels.map((date) =>
    date.toLocaleString("default", { month: "short" })
  ),
  datasets: [
    {
      label: "New Users",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
