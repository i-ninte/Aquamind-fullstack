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
    // const res = await req.json();
    // console.log(res);
    await connectToDB();

    console.log(req);

    const { ph, turbidity } = await req.json();

    console.log(ph, turbidity, "hello");

    // Trigger another request based on the req values
    const secondRequestUrl = "https://aquamind-sensors.onrender.com/predict"; // Replace with actual endpoint
    const secondRequestBody = {
      ph,
      turbidity,
    };

    const secondResponse = await fetch(secondRequestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(secondRequestBody),
    });

    //thielkd ofidodd

    const { probabilities, quality, confidence } = await secondResponse.json();
    // console.log(secondResponse);

    const prediction = new Predictt({
      ph,
      turbidity,
      probabilities,
      quality,
      confidence,
    });
    console.log(prediction);

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

//duaehieuioedjlvlkdv
