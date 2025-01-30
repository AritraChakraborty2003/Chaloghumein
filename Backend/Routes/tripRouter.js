import express from "express";
import { tripGET } from "../Controllers/Trip/tripGET.js";
import { tripPOST } from "../Controllers/Trip/tripPOST.js";

export const tripRouter = express.Router();
tripRouter.get("/", tripGET);
tripRouter.get("/:id", tripGET);
tripRouter.post("/", tripPOST());
