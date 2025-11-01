import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import booklistRoute from "./route/booklist.route.js";

dotenv.config();

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

// MongoDB Connection
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

mongoose
  .connect(URI)
  .then(() => console.log("✅ Connected to mongoDB"))
  .catch((error) => console.log("❌ MongoDB connection error:", error));

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/booklist", booklistRoute);

// ---------------------- Serve Frontend ----------------------
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
// ------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
