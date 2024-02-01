import uploadRouter from './Routes/uploadImgRoute.js';
import getAllProductsRouter from './Routes/getAllProductsRoute.js';
import usersRouter from './Routes/usersRoute.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cartFunctionsRouter from './Routes/cartFunctionsRoute.js'
import env from 'dotenv'
env.config()

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());


// Database Connection With MongoDB
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("mongodb connected.")});

// Connecting Routes:
app.use("/", uploadRouter);
app.use("/", getAllProductsRouter);
app.use("/", usersRouter);
app.use("/", cartFunctionsRouter);

app.get("/",(req,res)=>{
  res.json('Hello')
})


// API Creation
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running On Port " + port);
  }
});
