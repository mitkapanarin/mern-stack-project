import mongoose from 'mongoose'


const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  deadline: {
    type: Date,
    require: true
  },
  Status: {
    type: String
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})


export const TaskModel = mongoose.model("Task", taskSchema)