import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import songRoute from "./routes/songRoute/songRoutes.js"
import { auth } from "./Auth/auth.js";
import { toNodeHandler } from "better-auth/node";
import cookieParser from "cookie-parser";
 


dotenv.config();
const app = express();
app.set('trust proxy', 1);

app.use(cookieParser());


app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173", 
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Cookie"]
}));

app.use(express.json());

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api/songs", songRoute);


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
