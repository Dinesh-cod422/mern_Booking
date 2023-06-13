const mongoose = require("mongoose")

const ServiceSchema = new mongoose.Schema({
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

const ServiceModel = mongoose.model("service", ServiceSchema)

module.exports = ServiceModel