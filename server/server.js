import express from "express";
import cors from "cors";
import "dotenv/config";
import connetDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webHooks.js";

// initialize express
const app = express();

// Database Connection
await connetDB();

// Middlewares
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("API Workings");
});
app.post("/clerk", express.json(), clerkWebhooks);
