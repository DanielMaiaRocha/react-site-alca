import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    isSeller: { 
      type: Boolean, 
      default: false
    },
    lang: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    profilePic: {
      type: String,
    }
  },
  { timestamps: true }
);

const modelName = mongoose.models.User || mongoose.model("User", userSchema);

export default modelName;