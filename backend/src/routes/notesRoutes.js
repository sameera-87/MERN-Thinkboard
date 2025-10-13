import express from "express"
import {createNote, deleteNote, getALLNotes, updateNote } from "../controllers/notesControllers.js"

const router = express.Router();

router.get("/", getALLNotes);
router.post("/", createNote);
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)

export default router;