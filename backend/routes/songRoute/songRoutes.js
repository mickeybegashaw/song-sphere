import express from "express";
import { getAllSong } from "../../controllers/getAllSongs.js";
import { updateSong } from "../../controllers/updateSong.js";
import { deleteSong } from "../../controllers/deleteSong.js";
import { createSong } from "../../controllers/createSong.js";
import { getSongById } from "../../controllers/getSongById.js";

const router = express.Router();

// Create song
router.post("/", createSong);

// get all song
router.get("/", getAllSong);

// Update song by id
router.get("/:id", getSongById);

// Update song
router.put("/:id", updateSong);

// Delete song
router.delete("/:id", deleteSong);

export default router;
