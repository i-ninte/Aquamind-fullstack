// handlers/vehicle.js

import Predict from "@/model/Predict";
import Prediction from "@/model/Prediction";
import Predictt from "@/model/Predictt";
import { connectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

// handlers/vehicles.js

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await connectToDB();
    // const { macId } = params;

    const phOverTime = await Predictt.aggregate([
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
          },
          averagePh: { $avg: "$ph" },
        },
      },
      {
        $project: {
          _id: 0,
          month: {
            $let: {
              vars: {
                monthsInString: [
                  "",
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
              },
              in: { $arrayElemAt: ["$$monthsInString", "$_id.month"] },
            },
          },
          year: "$_id.year",
          averagePh: 1,
        },
      },
      {
        $sort: { year: 1, month: 1 },
      },
    ]);

    console.log(phOverTime);

    const turbidityOverTime = await Predictt.aggregate([
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
          },
          averageTurbidity: { $avg: "$turbidity" },
        },
      },
      {
        $project: {
          _id: 0,
          month: {
            $let: {
              vars: {
                monthsInString: [
                  "",
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
              },
              in: { $arrayElemAt: ["$$monthsInString", "$_id.month"] },
            },
          },
          year: "$_id.year",
          averageTurbidity: 1,
        },
      },
      {
        $sort: { year: 1, month: 1 },
      },
    ]);

    console.log(turbidityOverTime);

    return NextResponse.json({
      phOverTime,
      turbidityOverTime,
    });
  } catch (err) {
    console.error("Error calculating fatigue metrics:", err);
  }
};
