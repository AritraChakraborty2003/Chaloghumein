import { expenseSchemaObj } from "../../Models/Expense.js";

export const expenseGET = async (req, res) => {
  try {
    if (req.query.trip === undefined) {
      const expenses = await expenseSchemaObj.find({});
      res.status(200).json(expenses);
    } else {
      const expenses = await expenseSchemaObj.find({ trip: req.query.trip });
      res.status(200).json(expenses);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
