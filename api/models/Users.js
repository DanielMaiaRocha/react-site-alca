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
  },
  { timestamps: true }
);

const modelName = mongoose.models.Users || mongoose.model("Users", userSchema);

export default modelName;