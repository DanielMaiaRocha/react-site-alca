import mongoose from "mongoose";

const { Schema } = mongoose;

const comentsSchema = new Schema(
  {
   cardId:{
    type: String, 
    required: true
   },
   userId:{
    type: String, 
    required: true
   },
   cardId:{
    type: String, 
    required: true
   },
   cardId:{
    type: String, 
    required: true
   },
  },
  { timestamps: true }
);

const modelName = mongoose.models.Coments || mongoose.model("Coments", comentsSchema);

export default modelName;