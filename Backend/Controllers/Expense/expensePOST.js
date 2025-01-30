import { expenseSchemaObj } from "../../Models/Expense.js";

export const expensePOST = () => {
  return async (req, res) => {
    try {
      const expense = new expenseSchemaObj(req.body);
      await expense.save();
      res.status(201).json({ status: 201, response: expense });
    } catch (error) {
      res.status(400).json({ status: 400, error: error.message });
    }
  };
};
