const MainData = require("../Model/Maindata")
const maindatajson = require("../data/mainData.json")
const dotenv = require("dotenv")
const DatabaseConn = require("../dotenv/Database")

dotenv.config({path:"/Backend/dotenv/config.env"})
DatabaseConn()

const seederMaindata = async() => {
    try{
        await MainData.deleteMany()
        console.log("maindata deleted")
        await MainData.insertMany(maindatajson)
        console.log("All Data Added!")
    }catch (error) {
        console.log(error.message)
    }
    process.exit()
}

seederMaindata()