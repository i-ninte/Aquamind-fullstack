"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as Icon from "iconsax-react";
import DashboardIcon from "@/components/dashboard/DashboardIcon";
import { useRouter } from "next/navigation";
import useStore from "@/lib/store";

const cardContents = [
  {
    icon: DropletIcon,
    bgClass: "bg-primary",
    iconClass: "text-primary-foreground",
    title: "Freshwater",
    route: "/dashboard/details-view",
  },
  {
    icon: WavesIcon,
    bgClass: "bg-secondary",
    iconClass: "text-secondary-foreground",
    title: "Saltwater",
    route: "/dashboard/detail-view",
  },
  {
    icon: WavesIcon,
    bgClass: "bg-muted",
    iconClass: "text-muted-foreground",
    title: "Brackish",
    route: "/dashboard/details-view",
  },
  {
    icon: GlassWaterIcon,
    bgClass: "bg-card",
    iconClass: "text-card-foreground",
    title: "Groundwat",
    route: "/dashboard/details-view",
  },
];

export default function Overview() {
  const router = useRouter();
  const { prediction, setPrediction } = useStore();
  const [fetchData, setFetchedData] = useState([]);
  const handleClick = (card: any) => {
    setPrediction(card);
    router.push("/dashboard/details-view");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/prediction`);
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

  return (
    <>
      <section className="w-full py-12">
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <h1 className="text-2xl font-bold tracking-tight">
              Water Prediction
            </h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 items-start">
            {fetchData.map((card, index) => (
              <Card
                onClick={() => {
                  handleClick(card);
                }}
                key={index}
                className="p-6  cursor-pointer flex flex-col items-center gap-4"
              >
                <div
                  className={`${card.bgClass} cursor-pointer rounded-full p-3 flex items-center justify-center`}
                >
                  {/* <card.icon className={`w-8 h-8 ${card.iconClass}`} />*/}
                  <DropletIcon className="w-8 h-8 bg-primary" />
                </div>
                <h3 className="text-xl font-semibold">{card.quality}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DropletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function GlassWaterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>
  );
}

function WavesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}
