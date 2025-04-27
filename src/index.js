import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

connectDB()
    .then(() =>
        app.listen(process.env.PORT || 8001, () => {
            console.log(`Server is running on Port : ${process.env.PORT}`);
        })
    )
    .catch((err) => {
        console.log(`MongoDB Connection Failed !!! `, err);
    });
