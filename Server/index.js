// load environment variables
require("dotenv").config();

const express = require("express"); 

const mongoose = require("mongoose");

const app = express(); 

const PORT = process.env.PORT || 5000; 

  

// Middleware to parse JSON data 

app.use(express.json()); 

// 👉 Connect to MongoDB 

mongoose.connect(process.env.MONGODB_URI, { 


}) 

.then(() => console.log("Connected to MongoDB")) 

.catch((err) => console.error("Failed to connect to MongoDB:", err)); 

// Import Task Routes
const taskRoutes = require("./routes/taskRoutes");

//use task routes all routes will start with API
app.use("/api", taskRoutes);


// Basic Home Route - a welcome message

app.get("/", (req, res) => { 

  res.send("Welcome to TaskManager Pro API"); 

}); 

  

// Start Server 

app.listen(PORT, () => { 

  console.log(`Server running on http://localhost:${PORT}`); 

}); 