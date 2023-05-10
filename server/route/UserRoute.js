import express from 'express'
import bcrypt from 'bcrypt'
import { UserModel } from '../model/UserModel.js'
export const UserRoute = express.Router()

UserRoute.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await UserModel.create({
      ...req.body,
      password: hashedPassword
    })
    res.status(200).json({
      message: { ...req.body, password: hashedPassword }
    })
  }
  catch (err) {
    res.status(500).json({
      message: "Signup Was unsuccessful"
    })
  }
})
UserRoute.post("/login", (req, res) => {
  const { email, password } = req.body
  res.status(200).json({
    message: req.body
  })
})