import mongoose from "mongoose";

const formDataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    address:{
        type:String,
        required:true,
        lowercase:true
    },
    pincode:{
        type:String,
        required:true
    }
},{timeStamps:true})

export const FormData = mongoose.model('FormData', formDataSchema);