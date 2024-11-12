import mongoose, {Schema, model} from "mongoose";


const userSchema=new Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:true
    },
    followers:{
        type:[{type:Schema.Types.ObjectId,ref:"User"}],
        default:[]
    },
    following:{
        type:[{type:Schema.Types.ObjectId,ref:"User"}],
        default:[]
    }
  
     
},{timestamps:true})

const User=mongoose.models.User||model("User",userSchema)

export default User