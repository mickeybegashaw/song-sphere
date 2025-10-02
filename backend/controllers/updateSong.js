import Song from "../models/songs.js";

export const updateSong = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.findByIdAndUpdate(
      id, 
      req.body, 
      { new: true, runValidators: true }
    );
    
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
    console.error('Error updating song:', error);
    res.status(400).json({
      success: false,
      message: 'Error updating song',
      error: error.message
    });
  }
};