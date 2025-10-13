import express from "express"
import {createNote, deleteNote, getALLNotes, updateNote, getNoteById } from "../controllers/notesControllers.js"

const router = express.Router();

router.get("/", getALLNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)

export default router;