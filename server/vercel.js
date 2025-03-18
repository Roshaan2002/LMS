import app from "./server.js"; // Import the express app
import { createServer } from "@vercel/node";

export default createServer(app);
