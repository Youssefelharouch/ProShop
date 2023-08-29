import dotenv from 'dotenv'
import express from 'express';

import productRoutes from './routes/productRoute.js';
import connectDB from "./config/db.js";
import { notFound,errorHandler } from './middleware/ErrorModdleware.js'

dotenv.config();


const app = express();
connectDB();
const port = process.env.PORT || 5000; 

app.use('/api/products',productRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);