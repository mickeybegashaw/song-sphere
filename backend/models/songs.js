import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String },
    genre: { type: String },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", songSchema);
export default Song;
