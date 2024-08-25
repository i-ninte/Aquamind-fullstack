/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8avZQVA4Y3Z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CartesianGrid, XAxis, Line, LineChart, Bar, BarChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";

export default function () {
  const [fetchData, setFetchedData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/metrics`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);

        setFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    (async () => await fetchData())();
  }, []);
  const [pHData, setPHData] = useState([
    { date: "2023-06-01", value: 7.2 },
    { date: "2023-06-02", value: 7.1 },
    { date: "2023-06-03", value: 7.0 },
    { date: "2023-06-04", value: 6.9 },
    { date: "2023-06-05", value: 7.1 },
    { date: "2023-06-06", value: 7.0 },
    { date: "2023-06-07", value: 7.2 },
    { date: "2023-06-08", value: 7.1 },
    { date: "2023-06-09", value: 7.0 },
    { date: "2023-06-10", value: 7.1 },
  ]);
  const [turbidityData, setTurbidityData] = useState([
    { date: "2023-06-01", value: 5 },
    { date: "2023-06-02", value: 6 },
    { date: "2023-06-03", value: 7 },
    { date: "2023-06-04", value: 8 },
    { date: "2023-06-05", value: 6 },
    { date: "2023-06-06", value: 7 },
    { date: "2023-06-07", value: 5 },
    { date: "2023-06-08", value: 6 },
    { date: "2023-06-09", value: 7 },
    { date: "2023-06-10", value: 6 },
  ]);
  const [waterPotability, setWaterPotability] = useState("Good");
  useEffect(() => {
    const latestPH = pHData[pHData.length - 1].value;
    const latestTurbidity = turbidityData[turbidityData.length - 1].value;
    if (latestPH >= 6.5 && latestPH <= 8.5 && latestTurbidity <= 5) {
      setWaterPotability("Good");
    } else {
      setWaterPotability("Poor");
    }
  }, [pHData, turbidityData]);
  return (
    <div className="flex flex-col h-full">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Water Quality Dashboard</h1>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <Card>
          <CardHeader>
            <CardTitle>pH</CardTitle>
            <CardDescription>
              Current pH value: {pHData[pHData.length - 1].value}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LinechartChart state={fetchData} className="aspect-[9/4]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Turbidity</CardTitle>
            <CardDescription>
              Current turbidity value:{" "}
              {turbidityData[turbidityData.length - 1].value} NTU
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BarchartChart state={fetchData} className="aspect-[9/4]" />
          </CardContent>
        </Card>
        {/* <div className="col-span-1 md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Water Potability</CardTitle>
              <CardDescription>
                {waterPotability === "Good"
                  ? "The water is currently safe for consumption."
                  : "The water is not recommended for consumption."}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                  waterPotability === "Good"
                    ? "bg-green-500 text-green-50"
                    : "bg-red-500 text-red-50"
                }`}
              >
                {waterPotability[0]}
              </div>
            </CardContent>
          </Card>
        </div> */}
      </main>
    </div>
  );
}

function BarchartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart accessibilityLayer data={props?.state?.turbidityOverTime}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="averageTurbidity"
            fill="var(--color-desktop)"
            radius={8}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={props.state.phOverTime}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="averagePh"
            type="natural"
            stroke="black"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
