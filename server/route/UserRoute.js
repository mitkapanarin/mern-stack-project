import express from 'express'
import bcrypt from 'bcrypt'
import { UserModel } from '../model/UserModel.js'
import jwt from 'jsonwebtoken'
export const UserRoute = express.Router()

UserRoute.post("/create-users", async (req, res) => {
  try {
    const { username, email, password, tasks } = req.body;

    const checkUserEmail = await UserModel.findOne({ email });

    if (checkUserEmail) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

    const checkUserName = await UserModel.findOne({ username });

    if (checkUserName) {
      res.status(400).json({ message: "Username already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      ...req.body,
      // tasks: tasks || [],
      password: hashedPassword,
    });

    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

UserRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "Invalid email or password" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(400).json({ message: "Invalid email or password" });
      return;
    }

    const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d"
    })

    return res.status(200).json({
      message: "Logged in successfully",
      email: user.email,
      token,
      userID: user._id,
      username: user.username
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});