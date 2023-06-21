const MainData = require("../Model/Maindata")
const APIFeatures = require("../utils/ApiFeatures")

exports.getMainDatas = async(req, res) => {
    try{
        const resPerPage = 3
        let buildQuery = () => {
            return new APIFeatures(MainData.find(), req.query).search()
        }
        const filteredProductsCount = await buildQuery().query.countDocuments({})
        const totalDatasCount = await MainData.countDocuments({})
        let mantabaCount = totalDatasCount

        if(filteredProductsCount !== totalDatasCount) {
            mantabaCount = filteredProductsCount
        }

        const MantabaDatas = await buildQuery().paginate(resPerPage).query
        // await new Promise(resolve => setTimeout(resolve, 3000))
        res.status(200).json({ Success: true, count: mantabaCount, resPerPage, MantabaDatas})
    }
    catch (error) {
        res.status(500).json({ Message: "Server Down Refresh the Page" })
    }
}

exports.getSingleMainData = async(req, res) => {
    try{
        const singleMaindata = await MainData.findById(req.params.id)
        res.status(200).json({ Success: true, singleMaindata })
    }catch (error){
        console.log(error)
        res.status(500).json({Message: "This Page is Server Down"})
    }
}

exports.getAllData = async(req, res) => {
    try{
        const allDatas = await MainData.find()
        res.status(200).json({ Success: true, allDatas})
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ Message: "This Page is Server"})
    }
}