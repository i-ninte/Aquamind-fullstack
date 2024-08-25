"use client";

import React from "react";
import { saveAs } from "file-saver";
import axios from "axios";

const Page = () => {
  const downloadReport = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/prediction", {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "application/pdf" });
      console.log(blob);
      saveAs(blob, "report.pdf");
    } catch (error) {
      console.error("Error downloading the report:", error);
    }
  };

  return (
    <div>
      <button onClick={downloadReport}>Download Report</button>
    </div>
  );
};

export default Page;
