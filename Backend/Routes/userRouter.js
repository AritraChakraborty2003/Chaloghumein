import express from "express";
import { Signup } from "../Controllers/Signup_Login/Signup.js";
import { userGETID, usersGET } from "../Controllers/Users/usersGET.js";

const userRouter = express.Router();

userRouter.get("/", usersGET);
userRouter.get("/:id", userGETID);
userRouter.post("/signup", Signup());

export default userRouter;
