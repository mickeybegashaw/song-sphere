import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import songRoute from "./routes/songRoute/songRoutes.js"

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/songs", songRoute);
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
