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
    profilePicture: {
      type: String,
      required: false,
    },
    img:{
      type:String,
      required:false,
    },
    video:{
        type:String,
        required:false,
    },
    country:{
        type:String,
        required:true,
    },
    lang:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:false,
    },
    isSeller:{
        type:Boolean,
        default:false,
    },
  },
  { timestamps: true }
);

const modelName = mongoose.models.User || mongoose.model("User", userSchema);

export default modelName;