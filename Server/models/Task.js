const mongoose = require("mongoose"); 

  

// Task Schema (Structure) 

const TaskSchema = new mongoose.Schema({ 
  title: { 
    type: String, 
    required: true 
  }, 
  description: { 
    type: String, 
    required: true 
  }, 
  createdAt: { 
    type: Date, 
    default: Date.now 
  } 
});   

// Create and Export Task Model 

module.exports = mongoose.model("Task", TaskSchema); 