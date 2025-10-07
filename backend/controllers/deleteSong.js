import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../Auth/auth.js";
import Song from "../models/songs.js";

export const deleteSong = async (req, res) => {
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

    const { id } = req.params;
    const song = await Song.findByIdAndDelete(id);

    if (!song) {
      return res.status(404).json({
        success: false,
        message: "Song not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Song deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting song:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting song",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
