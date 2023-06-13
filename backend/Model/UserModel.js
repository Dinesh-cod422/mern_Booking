const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    email: {
        type: String,
        required: true
    },
    mobileNo: {
        type: Number,
    }
})

const UserModel = mongoose.model("auth", UserSchema)

module.exports = UserModel