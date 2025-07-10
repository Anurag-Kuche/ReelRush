import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI!;

if(!MONGODB_URI){
    throw new Error("Define mongodb uri in env")
}


let cached=global.mongoose;