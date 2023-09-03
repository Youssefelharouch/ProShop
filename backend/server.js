import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/ordersRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/ErrorModdleware.js";

dotenv.config();

const app = express();

// Body pARSER middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie Parse middleware
app.use(cookieParser());

connectDB();
const port = process.env.PORT || 5000;

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
