    import mongoose from "mongoose";
    import { DB_NAME } from "../constants.js";
    import dotenv from "dotenv";
    dotenv.config();

    export const connectDB = async () => {
    try {
        const connectInstance=await mongoose
        .connect(`${process.env.DB_URI}/${DB_NAME}`)
        .then(() => console.log("DB connected successfully...!"))
        .catch((error) => console.log("DB connection FAILED...!", error));
    } catch (error) {
        console.log(error);
    }
    };
