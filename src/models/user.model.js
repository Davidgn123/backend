import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

export const userSchema =new mongoose.Schema({
    username:{
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    }, 
    password:{
        type : String,
        require: true,
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)