import mongoose from "mongoose";

const { Schema } = mongoose;

const usersecondSchema = new Schema(
  {
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
    shortDesc:{
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

const modelName = mongoose.models.User || mongoose.model("UserSecond", usersecondSchema);

export default modelName;