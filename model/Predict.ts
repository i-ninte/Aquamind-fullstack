import { Schema, models, model } from "mongoose";

const PredictionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    probabilities: [
      {
        type: String,
        required: false,
      },
    ],
    quality: {
      type: String,
      required: false,
    },
    confidence: {
      type: String,
      required: false,
    },
    turbidity: {
      type: String,
      required: false,
    },
    ph: {
      type: Number,
      required: false,
    },
    temperature: {
      type: Number,
      required: false,
    },
    dissolvedOxygen: {
      type: Number,
      required: false,
    },
    conductivity: {
      type: Number,
      required: false,
    },
    biochemicalOxygenDemand: {
      type: Number,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: true } // Disable automatic timestamps
);

const Predict = models.Predict || model("Predict", PredictionSchema);

export default Predict;
