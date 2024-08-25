"use client";
import React from "react";
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

// Example data for daily, weekly, and monthly usage
const dailyData = [
  { name: "01", usage: 120 },
  { name: "02", usage: 150 },
  { name: "03", usage: 200 },
  // Add more daily data points
];

const weeklyData = [
  { name: "Week 1", usage: 840 },
  { name: "Week 2", usage: 920 },
  { name: "Week 3", usage: 1100 },
  // Add more weekly data points
];

const monthlyData = [
  { name: "January", usage: 3600 },
  { name: "February", usage: 3400 },
  { name: "March", usage: 4200 },
  // Add more monthly data points
];

const CombinedCharts = () => (
  
  <div className="flex">
    
    <h2>Daily Water Usage</h2>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={dailyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="usage" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>

    <h2>Weekly Water Usage</h2>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={weeklyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="usage" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>

    <h2>Monthly Water Usage</h2>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={monthlyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="usage" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default CombinedCharts;
