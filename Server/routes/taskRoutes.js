const express = require("express"); 

const router = express.Router(); 

const Task = require("../models/Task"); 

  

// 👉 Create a New Task 

router.post("/tasks", async (req, res) => { 

  const { title, description } = req.body; 

  

  if (!title || !description) { 

    return res.status(400).json({ error: "Title and description are required" }); 

  } 

  

  try { 

    const task = await Task.create({ title, description }); 

    res.status(201).json(task); 

  } catch (err) { 

    res.status(500).json({ error: "Failed to create task" }); 

  } 

}); 

  

// 👉 Get All Tasks 

router.get("/tasks", async (req, res) => { 

  try { 

    const tasks = await Task.find(); 

    res.status(200).json(tasks); 

  } catch (err) { 

    res.status(500).json({ error: "Failed to get tasks" }); 

  } 

}); 

  

// 👉 Delete a Task by ID 

router.delete("/tasks/:id", async (req, res) => { 

  try { 

    await Task.findByIdAndDelete(req.params.id); 

    res.status(200).json({ message: "Task deleted" }); 

  } catch (err) { 

    res.status(500).json({ error: "Failed to delete task" }); 

  } 

}); 

  

module.exports = router; 