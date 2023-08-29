import dotenv from 'dotenv'
import productRoutes from './routes/productRoute.js';
import express from 'express';
dotenv.config();
import connectDB from "./config/db.js";
const app = express();


connectDB();
const port = process.env.PORT || 5000; 

app.use('/api/products',productRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});
app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);