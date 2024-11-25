import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from 'dotenv';



const app = express();
const PORT = process.env.PORT || 3000;
// Load environment variables from .env file
dotenv.config();

console.log(process.env.DB_NAME)
// (async function () {
//   try {
//     const connectionString = `${process.env.DB_URI}/${DB_NAME}`;
//     console.log("Connecting with URI: ", connectionString);
//     await mongoose
//       .connect(connectionString)
//       .then(() => console.log("DB connected...!"))
//       .catch((error) => console.log("Connection Failed:", error));
//   } catch (error) {
//     console.log(error);
//   }
// })();
