"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authContext } from "@/utils/provider/auth_provider";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import LoadingSpinner from "@/components/loadingSpinner";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Manager Panel",
    },
  },
};

export const data = {
  labels: [
    "Total Products",
    "Pending Products",
    "Approved Products",
    "Rejected Products",
    "Total Orders",
  ],
  datasets: [
    {
      label: "Dataset 1",
      data: [200, 450, 300, 700, 800],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
const ManagerDashboard = () => {
  const router = useRouter();
  const { currentUser, isLoading } = useContext(authContext);

  useEffect(() => {
    if (!currentUser && currentUser?.role !== "manager") {
      router.push("/login");
    }
  }, [currentUser, router]);

  return (
    <div className="bg-dark-100 text-black dark:text-white dark:bg-gray-900 lg:h-96 p-2">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h2 className="text-4xl font-medium text-center mx-auto">Manager</h2>
          <Bar options={options} data={data} />
        </div>
      )}
    </div>
  );
};

export default ManagerDashboard;
