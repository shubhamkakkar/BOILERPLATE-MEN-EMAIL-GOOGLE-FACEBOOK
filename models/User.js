const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: null
    },
    //images is made null for email-password
    date: {
        type: Date,
        default: Date.now
    }
})

mongoose.model("UserModel", UserSchema)