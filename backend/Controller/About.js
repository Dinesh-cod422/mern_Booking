const AboutModel = require('../Model/AboutModel')

exports.Aboutdata = async(req, res) => {
    try{
        const abData = await AboutModel.find()
        res.status(200).json({ Success: true, abData})
    }
    catch (error) {
        console.log(error)
        res.status(500).json({Message: "About Page Server Down"})
    }
}

exports.AboutDetailsPage = async(req, res) => {
    try{
        const abDetailsData = await AboutModel.findById(req.params.id)
        res.status(200).json({ Success: true, abDetailsData})
    }
    catch (error) {
        console.log(error)
        res.status(500).json({Message: "This Page is Server Down"})    }
}