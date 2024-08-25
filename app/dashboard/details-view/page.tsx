"use client";
import React from "react";
import PredictionDetailsPage from "@/components/dashboard/PredictionDetailsPage";
import useStore from "@/lib/store";
import OverviewPage from "@/components/dashboard/OverviewPage";

const page = () => {
  const { prediction } = useStore();
  return (
    <div>
      <OverviewPage state={prediction} />
    </div>
  );
};

export default page;
