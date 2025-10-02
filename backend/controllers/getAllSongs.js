import Song from "../models/songs.js";

export const getAllSong = async (req, res) => {
  try {
    //  query params for filtering
    const { genre, artist, year, title, limit = 50, page = 1 } = req.query;
    
    // Build filter object
    const filter = {};
    if (genre) filter.genre = { $regex: genre, $options: 'i' };
    if (artist) filter.artist = { $regex: artist, $options: 'i' };
    if (year) filter.year = year;
    if (title) filter.title = { $regex: title, $options: 'i' };

    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const songs = await Song.find(filter)
      .limit(parseInt(limit))
      .skip(skip)
      .sort({ createdAt: -1 }); 

      if (!songs.length) {
        return res.status(404).json({
          success: false,
          message: 'No songs found matching the criteria'
        });
      }

    // Get total count 
    const total = await Song.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: songs,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching songs:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching songs',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};