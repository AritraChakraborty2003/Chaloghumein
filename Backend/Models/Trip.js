import mongoose from "mongoose";
import validator from "validator";
const tripSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address");
        }
      },
    },
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
