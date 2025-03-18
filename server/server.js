import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webHooks.js";

// Initialize express
const app = express();

// Use an async function to handle top-level await
(async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit if DB connection fails
  }
})();

// Middlewares
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("API is working!");
});

app.post("/clerk", express.json(), clerkWebhooks);

// PORT
const port = process.env.PORT || 5000;

// Vercel does NOT need `app.listen()`, remove it and export the app instead
export default app;
