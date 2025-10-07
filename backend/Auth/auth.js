import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const client = new MongoClient(MONGO_URI);
const db = client.db();

export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
  trustedOrigins: [process.env.FRONTEND_URL , process.env.BACKEND_URL],

  session: {
    maxAge: 7 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
    storeSessionInDatabase:true,
  },
  advanced:{
  crossSubDomainCookies:{
    enabled:true,
    domain: ".onrender.com",
  }
  }
,

  baseURL: process.env.BACKEND_URL || "http://localhost:5000"
  
});
