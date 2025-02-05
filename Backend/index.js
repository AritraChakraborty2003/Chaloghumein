import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "./connections/connectDB.js";
import { generalRouter } from "./Routes/generalRouter.js";
import { tripRouter } from "./Routes/tripRouter.js";
import { expenseRouter } from "./Routes/expenseRouter.js";
import userRouter from "./Routes/userRouter.js";
import cookieParser from "cookie-parser";

//Backend Configurations:
const app = express();
dotenv.config();
connectDB("trip"); // For DB Connection
const PORT = process.env.PORT || 5178; //To Select Backend Port

//Application Level middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

//Routes Management
app.use("/", generalRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1", generalRouter);
app.use("/api/v1/trip", tripRouter);
app.use("/api/v1/expense", expenseRouter);

app.get("/profile", (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  return res.json(cookies);
});
//backend connection code
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
