import mongoose from 'mongoose'


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("db is connected")
    } catch (error) {
        console.log("error in connection", error);
    }
}

export default dbConnection;