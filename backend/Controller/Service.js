const ServiceModel = require('../Model/ServiceModel')

exports.Servicedata = async(req, res) => {
    try{
        const ServiceData = await ServiceModel.find()
        res.status(200).json({ Success: true, ServiceData})
    }
    catch (error) {
        console.log(error)
        res.status(500).json({Message: "Service Page Server Down"})
    }
}

exports.ServiceDetailsPage = async(req, res) => {
    try{
        const serDetailsData = await ServiceModel.findById(req.params.id)
        res.status(200).json({ Success: true, serDetailsData})
    }
    catch (error) {
        console.log(error)
        res.status(500).json({Message: "This Page is Server Down"})    
    }
}