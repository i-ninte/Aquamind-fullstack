"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import { Card } from "@/components/ui/card"
import * as Icon from "iconsax-react";
import DashboardIcon from "@/components/dashboard/DashboardIcon";
import NotificationSystem from "@/components/NotificationSystem";
import RealTimeMonitoringChart from "@/components/charts/charts";
import CombinedCharts from "@/components/CombinedCharts";
import PredictionDetailsPage from "@/components/dashboard/PredictionDetailsPage";
import { useRouter } from "next/navigation";
import Overview from "@/components/dashboard/Overview";

const page: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router;
  };
  return (
    <>
      <Overview />
    </>
  );
};

const cardContents = [
  {
    icon: DropletIcon,
    bgClass: "bg-primary",
    iconClass: "text-primary-foreground",
    title: "Freshwater",
  },
  {
    icon: WavesIcon,
    bgClass: "bg-secondary",
    iconClass: "text-secondary-foreground",
    title: "Saltwater",
  },
  {
    icon: WavesIcon,
    bgClass: "bg-muted",
    iconClass: "text-muted-foreground",
    title: "Brackish",
  },
  {
    icon: GlassWaterIcon,
    bgClass: "bg-card",
    iconClass: "text-card-foreground",
    title: "Groundwater",
  },
];

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

function WavesIcon(props: any) {
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

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

interface FeatureCardProps {
  icon: keyof typeof Icon;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  children,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <DashboardIcon title={icon} active={true} />
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
    <CardFooter>{children}</CardFooter>
  </Card>
);

export default page;
