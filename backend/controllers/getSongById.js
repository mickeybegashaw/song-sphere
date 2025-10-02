import Song from "../models/songs.js";
import { isValidObjectId } from "mongoose";

export const getSongById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid song ID'
      });
    }
    const song = await Song.findById(id);
    
    if (!song) {
      return res.status(404).json({
        success: false,
        message: 'Song not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: song
    });
  } catch (error) {
    console.error('Error fetching song:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching song',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};