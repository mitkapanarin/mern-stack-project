import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { UserRoute } from './route/UserRoute.js'
import cors from 'cors'
dotenv.config()

const PORT = process.env.PORT

const app = express()
app.use(json())
app.use(cors())

app.use("/auth", UserRoute)

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('mongodb conected')
  } catch (err) {
    console.log(err)
  }
}

app.listen(PORT, () => {
  connectDB();
  console.log(`server running at ${PORT}`)
})