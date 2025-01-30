import { tripSchemaObj } from "../../Models/Trip.js";

export const tripPOST = () => {
  return async (req, res) => {
    console.log(req.body);
    try {
      const trip = new tripSchemaObj(req.body);
      await trip.save();
      res.status(201).json({ status: 201 });
    } catch (error) {
      res.status(500).json({ status: 500, error: error.message });
    }
  };
};
