import express from 'express'
import { TaskModel } from '../model/TaskModel.js'

export const TaskRoute = express.Router()

TaskRoute.get("/get-all-tasks", async (req, res) => {
  try {
    const { userOwner } = req.body
    const getAllTasks = await TaskModel.find({
      userOwner
    })
    res.status(200).json({
      message: "success",
      Tasks: getAllTasks
    })
  }
  catch (err) {
    res.status(500).json({
      message: "failed to get all tasks"
    })
  }
})

TaskRoute.post("/create-task", async (req, res) => {
  try {
    const { task, description, deadline, status, userOwner } = req.body
    const newTask = new TaskModel(req.body)
    await newTask.save()
    return res.status(200).json({
      message: "task created successfully"
    })
  }
  catch (err) {
    res.status(500).json({
      message: "task could not be created"
    })
  }
})

TaskRoute.delete("/delete-task", async (req, res) => {
  try {
    const { id } = req.body
    await TaskModel.findByIdAndDelete(id)
    res.status(200).json({
      message: "Task deleted successfully"
    })
  }
  catch (err) {
    res.status(500).json({
      message: "failed to delete task"
    })
  }
})

TaskRoute.put("/update-one-task", async (req, res) => {
  const { id, task, description, status, deadline } = req.body
})
