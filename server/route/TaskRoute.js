import express from 'express'
import { TaskModel } from '../model/TaskModel.js'

export const TaskRoute = express.Router()

TaskRoute.get("/get-all-tasks/:userID", async (req, res) => {
  try {
    const { userID } = req.params
    const getAllTasks = await TaskModel.find({
      userOwner: userID
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

TaskRoute.post("/create-task/:userId", async (req, res) => {
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

TaskRoute.delete("/delete-task/:userId/:taskId", async (req, res) => {
  try {
    const { taskId } = req.params
    await TaskModel.findByIdAndDelete(taskId)
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

TaskRoute.put("/update-task/:userId/:taskId", async (req, res) => {
  try {
    const { userId, taskId } = req.params;
    const { task, deadline, status, description } = req.body;
    const updatedTask = await TaskModel.findByIdAndUpdate(taskId, req.body, { new: true });
    res.status(200).json({
      message: "Task updated successfully",
      updatedTask,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to update task",
    });
  }
});








