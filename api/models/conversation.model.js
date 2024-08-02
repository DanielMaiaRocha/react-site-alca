import mongoose from "mongoose";

const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    conversationId: { 
      type: String, 
      required: true,
    },
    userId: { 
        type: String, 
        required: true,
    },
    messageId: { 
        type: String, 
        required: true,
    },
    
  },
  { timestamps: true }
);

const modelName = mongoose.models.conversation || mongoose.model("Conversation", conversationSchema);

export default modelName;