import { usersObj } from "../../Models/User.js";
import { hashPassword } from "./hashPassword.js";
export const Signup = () => {
  return async (req, res) => {
    try {
      const { username, email, password } = req.body;
      let hashedPassword;

      //Hash the password using bcrypt
      try {
        hashedPassword = await hashPassword(password);
      } catch (error) {
        return res.status(400).json({ status: 400, error: error.message });
      }

      const user = new usersObj({
        username: username,
        email: email,
        password: hashedPassword,
      });

      await user.save();

      //Generate a JWT token for the newly created user
      res.cookie("token", "gyugyufu66r67ffy7");
      res.status(201).json({ status: 201 });
    } catch (error) {
      res.status(400).json({ status: 400, error: error.message });
    }
  };
};
