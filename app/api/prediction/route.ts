import Predict from "@/model/Predict";
import Prediction from "@/model/Prediction";
import Predictt from "@/model/Predictt";
import { connectToDB } from "@/utils/db";
import { NextResponse } from "next/server";

const addCorsHeaders = (res: any) => {
  res.headers.append("Access-Control-Allow-Origin", "*");
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE"
  );
  res.headers.append("Access-Control-Allow-Headers", "Content-Type");
};

export const POST = async (req: any) => {
  try {
    await connectToDB();

    const {
      ph,
      dissolvedOxygen,
      temperature,
      conductivity,
      bod,
      probabilities,
      quality,
      confidence,
    } = await req.json();

    const prediction = new Predictt({
      ph,
      dissolvedOxygen,
      temperature,
      conductivity,
      biochemicalOxygenDemand: bod,
      probabilities,
      quality,
      confidence,
      createdAt: Date.now(), // Ensure createdAt is set
    });

    console.log({ createdAt: Date.now() });

    await prediction.save();

    const response = NextResponse.json({
      message: "Prediction created successfully",
      prediction,
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
};

export const GET = async (req: any) => {
  try {
    await connectToDB();

    const predictions = await Predictt.find();

    const response = NextResponse.json(predictions);

    addCorsHeaders(response);

    return response;
  } catch (error) {
    console.error("Error fetching predictions:", error);
    const response = NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );

    addCorsHeaders(response);

    return response;
  }
};
