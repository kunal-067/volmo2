import mongoose from "mongoose";

const {
    connectDb
} = require("../dbconnect");

await connectDb();
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        required: true,
        type: Number
    },
    email: {
        required: true,
        type: String
    },
     
    address:String,
    city: String,
    district: String,
    state: String,
    pinCode: Number,

    id: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String
    },

    status:{
        type:String,
        enum:['active','inactive']
    },
    refundedAmount:{
        type:Number,
        default:0
    }
})
export const User = mongoose.models?.User || mongoose.model('User', userSchema)