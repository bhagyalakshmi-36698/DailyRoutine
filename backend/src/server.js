const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "DailyRoutine backend is running",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`DailyRoutine backend running on http://localhost:${PORT}`);
});