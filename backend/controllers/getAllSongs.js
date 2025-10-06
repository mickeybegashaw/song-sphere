import { fromNodeHeaders } from "better-auth/node";
import Song from "../models/songs.js";
import { auth } from "../Auth/auth.js";

export const getAllSong = async (req, res) => {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    // Check if session exists and has user
    if (!session || !session.user) {
      return res.status(401).json({ 
        success: false, 
        message: "Unauthorized - Please log in" 
      });
    }

    const userId = session.session.userId;

    const { genre, artist, year, title, limit = 50, page = 1 } = req.query;
    
    const filter = { userId }; // This ensures we only get songs for this user

    if (genre) filter.genre = { $regex: genre, $options: 'i' };
    if (artist) filter.artist = { $regex: artist, $options: 'i' };
    if (year) filter.year = year;
    if (title) filter.title = { $regex: title, $options: 'i' };

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit))); // Limit max to 100 per page
    const skip = (pageNum - 1) * limitNum;
    
    // Fetch songs with the user filter
    const songs = await Song.find(filter)
      .limit(limitNum)
      .skip(skip)
      .sort({ createdAt: -1 }); 

  

    // Get total count for this user
    const total = await Song.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: songs,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum)
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