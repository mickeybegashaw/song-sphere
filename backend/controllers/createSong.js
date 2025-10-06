import { fromNodeHeaders } from "better-auth/node";
import Song from "../models/songs.js";
import { auth } from "../Auth/auth.js";

export const createSong = async (req, res) => {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session || !session.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - Please log in",
      });
    }

    const userId = session.session.userId;

    const song = new Song({
      ...req.body,
      userId, 
    });

    const savedSong = await song.save();

    return res.status(201).json({
      success: true,
      message: "Song created successfully",
      data: savedSong,
    });
  } catch (error) {
    console.error("Error creating song:", error);

    return res.status(400).json({
      success: false,
      message: "Error creating song",
      error: error.message,
    });
  }
};
