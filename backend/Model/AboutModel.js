const mongoose = require("mongoose")

const AboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    para: {
        type: String,
        required:true
    },
    mainpara: {
        type: String,
        required: true
    },
    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ]
})

const AboutModel = mongoose.model("about", AboutSchema)

module.exports = AboutModel