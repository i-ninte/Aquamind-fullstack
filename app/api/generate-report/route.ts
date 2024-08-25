//
import { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";
import fs from "fs";
import path from "path";

import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/db";
import Prediction from "@/model/Prediction";

// Utility function to add CORS headers
const addCorsHeaders = (response: NextResponse) => {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE"
  );
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
};


export const GET = async () => {
 
try {
      await connectToDB();

    
      // Save data to CSV file
      const csvData = await  Prediction.find()
        csvData.map((row: any) => `${row.time},${row.value}`)
        .join("\n");
      const csvFilePath = path.join(process.cwd(), "data.csv");
      fs.writeFileSync(csvFilePath, csvData);

      // Generate report using R script
      exec(
        "Rscript generate_report.R",
        { cwd: process.cwd() },
        (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ message: "Error generating report" });
          }

          // Send generated PDF report
          const reportPath = path.join(process.cwd(), "report.pdf");
          res.sendFile(reportPath);
        }
      );

      const response = NextResponse.json({
        message: "Prediction created successfully"
      });

      addCorsHeaders(response);

      return response;
    } catch (error) {
      console.error("Error creating prediction:", error);
      const response = NextResponse.json(
        { message: "Internal server error." },
        { status: 500 }
      );

      addCorsHeaders(response);

      return response;
    }
  }

