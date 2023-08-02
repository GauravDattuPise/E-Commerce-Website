import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

import dbConnection from './config/db.js'
import route from "./routes/route.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/ProductRoutes.js"

dotenv.config();

// REST OBJECT
const app = express();

app.use(express.json());
app.use(cors());

// FUNCTION TO CONNECT WITH DB
dbConnection();

app.use("/", route);
app.use("/category", categoryRoutes);
app.use("/product/", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)//gkuyguygu
});

// server is running on 500
// askdjfsdjf