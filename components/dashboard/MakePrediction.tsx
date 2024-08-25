"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useStore from "@/lib/store";
import { useRouter } from "next/navigation";

export default function MakePrediction() {
  const [formData, setFormData] = useState({
    ph: "",
    temperature: "",
    do: "",
    conductivity: "",
    bod: "",
  });

  const { setPrediction } = useStore();

  const [errors, setErrors] = useState({
    ph: "",
    temperature: "",
    do: "",
    conductivity: "",
    bod: "",
  });

  const [secondResponse, setSecondResponse] = useState(null);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    const numberValue = Number(value);

    switch (name) {
      case "ph":
        if (numberValue < 1 || numberValue > 14) {
          errorMessage = "pH must be between 1 and 14";
        }
        break;
      case "temperature":
        if (numberValue < 0 || numberValue > 100) {
          errorMessage =
            "Temperature must be between 0 and 100 degrees Celsius";
        }
        break;
      case "do":
        if (numberValue < 0 || numberValue > 20) {
          errorMessage = "Dissolved Oxygen must be between 0 and 20 mg/L";
        }
        break;
      case "conductivity":
        if (numberValue < 0 || numberValue > 2000) {
          errorMessage = "Conductivity must be between 0 and 2000 μS/cm";
        }
        break;
      case "bod":
        if (numberValue < 0 || numberValue > 30) {
          errorMessage =
            "Biochemical Oxygen Demand must be between 0 and 30 mg/L";
        }
        break;
      default:
        if (value !== "" && (isNaN(numberValue) || numberValue < 0)) {
          errorMessage = "Value cannot be negative or invalid";
        }
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      Object.values(errors).every((error) => error === "") &&
      Object.values(formData).every((value) => value !== "")
    ) {
      try {
        const response = await fetch(`https://aquamind1.onrender.com/predict`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch prediction");
        }

        const data = await response.json();

        const combinedData = {
          ...formData,
          ...data,
          dissolvedOxygen: formData.do,
        };
        console.log(combinedData);

        const secondResponse = await fetch(
          `http://localhost:3000/api/prediction`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(combinedData),
          }
        );

        if (!secondResponse.ok) {
          throw new Error("Failed to fetch second endpoint data");
        }

        const secondData = await secondResponse.json();
        setSecondResponse(secondData);
        console.log(secondData);

        setPrediction(secondData?.prediction);
        router.push("/dashboard/details-view");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Water Quality Prediction</CardTitle>
          <CardDescription>
            Enter the water parameters to get a prediction.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ph">pH</Label>
                <Input
                  id="ph"
                  name="ph"
                  type="number"
                  step="0.1"
                  min="1"
                  max="14"
                  value={formData.ph}
                  onChange={handleInputChange}
                  required
                />
                {errors.ph && <p className="text-red-500">{errors.ph}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="temperature">Temperature (°C)</Label>
                <Input
                  id="temperature"
                  name="temperature"
                  type="number"
                  step="0.1"
                  min="0"
                  max="100"
                  value={formData.temperature}
                  onChange={handleInputChange}
                  required
                />
                {errors.temperature && (
                  <p className="text-red-500">{errors.temperature}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="do">Dissolved Oxygen (mg/L)</Label>
                <Input
                  id="do"
                  name="do"
                  type="number"
                  step="0.1"
                  min="0"
                  max="20"
                  value={formData.do}
                  onChange={handleInputChange}
                  required
                />
                {errors.do && <p className="text-red-500">{errors.do}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="conductivity">Conductivity (μS/cm)</Label>
                <Input
                  id="conductivity"
                  name="conductivity"
                  type="number"
                  step="1"
                  min="0"
                  max="2000"
                  value={formData.conductivity}
                  onChange={handleInputChange}
                  required
                />
                {errors.conductivity && (
                  <p className="text-red-500">{errors.conductivity}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bod">Biochemical Oxygen Demand (mg/L)</Label>
              <Input
                id="bod"
                name="bod"
                type="number"
                step="0.1"
                min="0"
                max="30"
                value={formData.bod}
                onChange={handleInputChange}
                required
              />
              {errors.bod && <p className="text-red-500">{errors.bod}</p>}
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={Object.values(errors).some((error) => error !== "")}
            >
              Predict Water Quality
            </Button>
          </form>
        </CardContent>
      </Card>
      {secondResponse && (
        <Card className="mt-8 w-full max-w-md">
          <CardHeader>
            <CardTitle>Second Endpoint Response</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center text-4xl font-bold">
              {secondResponse.result}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
