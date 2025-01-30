import mongoose from "mongoose";

const tripSchema = mongoose.Schema(
  {
    trip: {
      type: String,
      required: true,
    },
    days: {
      type: "Number",
      required: true,
    },
    persons: {
      type: "Number",
      required: true,
    },
    family: {
      type: "Number",
      required: true,
    },
  },
  {
    timestamps: true,
    Collection: "trips",
  }
);

export const tripSchemaObj = mongoose.model("Trip", tripSchema);
