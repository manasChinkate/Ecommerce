import mongoose from "mongoose";

const SignupSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true,
        lowercase: true
    },
    email:{
        type:String,
        required: true,
        lowercase:true
    }

    
},{timeStamps:true})

export const Signup = mongoose.model("SignupModel", SignupSchema)