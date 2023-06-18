import express from "express";
import dotenv from "dotenv";
import dbConnection from './config/db.js'
import route from "./routes/route.js"

dotenv.config();

// rest object
const app = express();

app.use(express.json());

dbConnection();

app.use("/",route);

// rest api
app.get("/", (req, res) => {
    res.send({
        message: "this is get request"
    })
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})