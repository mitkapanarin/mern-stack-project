import mongoose from 'mongoose'


const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  status: {
    type: String
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});


export const TaskModel = mongoose.model("Task", taskSchema)