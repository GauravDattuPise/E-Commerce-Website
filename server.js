import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

import dbConnection from './config/db.js'
import route from "./routes/route.js"


dotenv.config();

// REST OBJECT
const app = express();

app.use(express.json());
app.use(cors());

// FUNCTION TO CONNECT WITH DB
dbConnection();

app.use("/",route);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})