import { usersObj } from "../../Models/User.js";

export const usersGET = async (req, res) => {
  try {
    const users = await usersObj.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

export const userGETID = async (req, res) => {
  try {
    if (req.query.email && !req.query.username) {
      const user = await usersObj.find({ email: req.query.email });
      res.status(200).json(user);
    } else if (!req.query.email && req.query.username) {
      const user = await usersObj.find({ username: req.query.username });
      res.status(200).json(user);
    } else {
      const user = await usersObj.find({
        email: req.query.email,
        username: req.query.username,
      });
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json({ status: 400, error: error.message });
  }
};
