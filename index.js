import uploadRouter from './Routes/uploadImgRoute.js';
import getAllProductsRouter from './Routes/getAllProductsRoute.js';
import usersRouter from './Routes/usersRoute.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cartFunctionsRouter from './Routes/cartFunctionsRoute.js'

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connect("mongodb+srv://SohamMargaj:Soham%40555@cluster0.5wwtalj.mongodb.net/E-Commerce");

// Connecting Routes:
app.use("/", uploadRouter);
app.use("/", getAllProductsRouter);
app.use("/", usersRouter);
app.use("/", cartFunctionsRouter);


// API Creation
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running On Port " + port);
  }
});
