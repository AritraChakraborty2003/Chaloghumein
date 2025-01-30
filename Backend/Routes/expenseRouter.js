import express from "express";
import { expenseGET } from "../Controllers/Expense/expenseGET.js";
import { expensePOST } from "../Controllers/Expense/expensePOST.js";
export const expenseRouter = express.Router();

expenseRouter.get("/", expenseGET);
expenseRouter.get("/:id", expenseGET);
expenseRouter.post("/", expensePOST());
