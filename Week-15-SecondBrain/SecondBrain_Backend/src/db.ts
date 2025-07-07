import mongoose, { model, Schema } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

if(!mongoUrl){
    throw new Error("MONGO_URL is not defined in environment variables");
}

mongoose.connect(mongoUrl);

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
})

export const ContentModel = model("Content", ContentSchema);