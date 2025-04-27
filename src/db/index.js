import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(connectionInstance);
        console.log(
            `\nMONGODB connection Established !! DB HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
    }
}

export default connectDB;
