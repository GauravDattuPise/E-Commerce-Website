import mongoose from 'mongoose'

// function to connect with db

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("db is connected")
    } catch (error) {
        console.log("error in connection", error);
    }
}

export default dbConnection;