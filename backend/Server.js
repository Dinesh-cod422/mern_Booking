const app = require("./app")
const dotenv = require("dotenv")
const path = require("path")
const DatabaseConn = require("./dotenv/Database")

dotenv.config({path:path.join(__dirname, "dotenv/config.env")})
DatabaseConn()

app.listen(process.env.PORT, () => {
    console.log(`Server is Running ${process.env.PORT}`)
})