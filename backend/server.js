import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

console.log(port);

app.get("/products", (req, res) => {
  res.send("Server is ready!");
});

app.listen(port, () => {
  connectDB();
  console.log("Server is running on http://localhost:5001");
});
