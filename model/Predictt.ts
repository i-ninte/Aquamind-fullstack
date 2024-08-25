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
    turbidity: {
      type: Number,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: false } // Disable automatic timestamps
);

const Predicttt = models.Predicttt || model("Predicttt", PredictionSchema);

export default Predicttt;
