import Song from "../models/songs.js";

export const createSong = async (req, res) => {
  try {
    const song = new Song(req.body);
    const savedSong = await song.save();
    
    res.status(201).json({
      success: true,
      data: savedSong
    });
  } catch (error) {
    console.error('Error creating song:', error);
    res.status(400).json({
      success: false,
      message: 'Error creating song',
      error: error.message
    });
  }
};
