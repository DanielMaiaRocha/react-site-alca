import mongoose from "mongoose";

const { Schema } = mongoose;

const chatSchema = new Schema(
  {
    id: { 
      type: String, 
      required: true,
      unique: true
    },
    userId: { 
        type: String, 
        required: true,
        unique: true
    },
    sellerId: { 
        type: String, 
        required: true,
        unique: true
    },
    readBySeller: {
        type: Boolean,
        required: true
    },
    readByUser: {
        type: Boolean,
        required: true
    },
    lastMessage: {
        type: String,
        required: false
    },
    
  },
  { timestamps: true }
);

const modelName = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

export default modelName;