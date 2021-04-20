import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import useDb from './db/db.js';
import Router from './routers/UserRouter.js';
import cookies from 'cookie-parser'

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookies())

// database connection
useDb();
// use Routers 
app.use('/api',Router)


// server create
const Port = process.env.PORT||5000;
app.listen(Port,()=>console.log(`app is runing on localhost:${Port}`))