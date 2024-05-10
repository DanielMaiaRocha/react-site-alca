import mongoose from 'mongoose';
const { Schema } = mongoose;

const cardSchema = new Schema({
  userID:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  cat:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  cover:{
    type:String,
    required:true
  },
   images:{
    type:[String],
    required:false
  },
  shortTitle:{
    type:String,
    required:true
  },
  shortDescription:{ 
    type:String,
    required:true
  },
  country:{
    type:[String],
    required:false
  },
  lang:{
    type:[String],
    required:false
  },

},{
    timestamps: true
});

export default mongoose.model("Card", cardSchema)