const mongoose = require("mongoose")

const DatabaseConn = () => {
    mongoose.connect(process.env.DATA_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then((con) => {
        console.log(`DB connected ${con.connection.host}`)
    }).catch((error) => {
        console.error(error)
    })
}

module.exports = DatabaseConn