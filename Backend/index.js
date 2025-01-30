import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "./connections/connectDB.js";
import { generalRouter } from "./Routes/generalRouter.js";

//Backend Configurations:
const app = express();
dotenv.config();
connectDB("trip"); // For DB Connection
const PORT = process.env.PORT || 5178;

//Application Level middlewares
app.use(cors());
app.use(bodyParser.json());

//Routes Management
app.use("/api/v1", generalRouter);

//backend connection code
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
