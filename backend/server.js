import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middlewares
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
