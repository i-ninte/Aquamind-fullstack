"use client";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data structure for water usage
const initialData = [
  { time: "00:00", usage: 0 },
  { time: "00:01", usage: 0 },
  // Add initial data points as needed
];

const RealTimeMonitoringChart: React.FC = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate receiving new data point
      const newDataPoint = {
        time: new Date().toLocaleTimeString(),
        usage: Math.random() * 100,
      };
      setData((prevData) => [...prevData.slice(-9), newDataPoint]); // Keep only the latest 10 data points
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="usage"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RealTimeMonitoringChart;
