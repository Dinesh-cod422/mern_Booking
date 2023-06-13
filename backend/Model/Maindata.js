const mongoose = require("mongoose")

const MaindataSchema = new mongoose.Schema(
    {
       name: {
        type:String,
        required:[true, "Please enter the name"],
        trim: true,
        maxlength:[100, "Mantaba name cannot exceed 100 characters" ]
       },
        ratings: {
            type: String,
            default: 0
        },
        numofReviews: {
            type:Number,
            default: 0
        },
        images:[
            {
                image:{
                    type:String,
                    required:true
                }
            }
        ],
        description: {
            type: String,
            required:[true, "Please enter Hotel description"]
        },
        location: {
            type:String,
            required:[true, "Please enter location"]
        },
        vegPrice: {
            type:Number,
            required:true,
            default:0.0
        },
        nonVegPrice: {
            type:Number,
            required:true,
            default:0.0
        }

    }
)

let MainSchema = mongoose.model("Maindata", MaindataSchema)

module.exports = MainSchema