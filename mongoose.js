// mongoose.js

import mongoose from 'mongoose'
 
let isConnected = false; // Variable to track the connection status
const MONGODB_URI = "mongodb+srv://pop_up_form_44:UeiwgyFxipeyl2Mx@cluster0.lxsxf3y.mongodb.net/?retryWrites=true&w=majority";;

export const dbConnect = async () => {
  // Set strict query mode for Mongoose to prevent unknown field queries.
  mongoose.set("strictQuery", true);

  if (!MONGODB_URI) return console.log("Missing MongoDB URL");

  // If the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);

    isConnected = true; // Set the connection status to true
    console.log("MongoDB connected");
  } catch (error) {
    console.log('error=>>>>>>>',error);
  }
};

