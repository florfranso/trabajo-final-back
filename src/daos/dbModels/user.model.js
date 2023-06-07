import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String
    }, 
    age:{
        type:Number,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    avatar:String
});

const UserModel = mongoose.model(userCollection, userSchema);

export {UserModel}