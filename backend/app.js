const express = require("express")
const app = express()
var cors = require('cors')
 
app.use(cors())
 


app.use(express.json())
const RegisterUser = require('./Routes/Route')
app.use('/api/v2/', RegisterUser)



module.exports = app