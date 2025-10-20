import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
// const express = require("express");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

// middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(
    cors(
        {origin: "http://localhost:5173"}
    )
);

// our simple custom middleware
// app.use((req,res, next) => {
//     console.log(`Req method is ${req.method} & Req url is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(()=> {
    app.listen(5001, () => {
        console.log("Server started on PORT:", PORT);
    });
});

