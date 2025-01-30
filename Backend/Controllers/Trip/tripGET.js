import { tripSchemaObj } from "../../Models/Trip.js";
export const tripGET = async (req, res) => {
  try {
    if (req.query.trip === undefined) {
      const tripsData = await tripSchemaObj.find();
      res.status(200).json(tripsData);
    } else {
      const tripsData = await tripSchemaObj.find({ name: req.query.name });
      res.status(200).json(tripsData);
    }
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message });
  }
};
