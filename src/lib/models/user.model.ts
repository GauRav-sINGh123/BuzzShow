import mongoose,{Schema, model} from "mongoose";


const userSchema=new Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})