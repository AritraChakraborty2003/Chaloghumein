import mongoose from "mongoose";

const expenseSchema = mongoose.Schema(
  {
    trip: {
      type: "String",
      required: true,
    },
    amt: {
      type: "Number",
      required: true,
    },
    reason: {
      type: "String",
      required: true,
    },
    day: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
    Collection: "expenses",
  }
);

export const expenseSchemaObj = mongoose.model("expenses", expenseSchema);
