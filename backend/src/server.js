import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"

// Recreate __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
// const express = require("express");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const _dirname = path.resolve()

// middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body

if(process.env.NODE_ENV !== "production") {
    app.use(
        cors(
            {origin: "http://localhost:5173"}
        )
    );
}



// our simple custom middleware
// app.use((req,res, next) => {
//     console.log(`Req method is ${req.method} & Req url is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}


connectDB().then(()=> {
    app.listen(5001, () => {
        console.log("Server started on PORT:", PORT);
    });
});

