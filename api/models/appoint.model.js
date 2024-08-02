import mongoose from 'mongoose';
import { number } from 'yup';
const { Schema } = mongoose;

const userSchema = new Schema({
    apointID:{
        type:String,
        required:true,
        unique:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    sellerId:{
        type:String,
        required:false,
    },
    sellerImg:{
        type:String,
        required:false,
    },
    isAccepted:{
        type:Boolean,
        required:false,
    },
    isRejected:{
        type:Boolean,
        required:false,
    },
    price:{
        type:Number,
        required:true,
    },
    production:{
        type:String,
        required:true,
    },
},{
    timestamps: true
});

export default mongoose.model("User", userSchema)