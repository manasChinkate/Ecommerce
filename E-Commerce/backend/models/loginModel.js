
import mongoose from "mongoose";

const LoginSchema = mongoose.Schema({
    email:{
        type: String,
        required : true,
        lowercase : true

    },
    password: {
        type : String,
        required : true
    }
},{timeStamps:true})

export const login = mongoose.model("loginmodel", LoginSchema) 
    
