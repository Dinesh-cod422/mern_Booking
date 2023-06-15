const User = require('../Model/UserModel')
const Admin = require('../Model/Admin')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")

exports.RegsiterAdmin = async(req, res) => {
    try{
        let {email, password} = req.body
        const Existuser = await Admin.findOne({email})
        if(Existuser){
          return res.status(404).json({Message: "User already Exists"})
        }
        let newUser = new Admin({email, password})
        const salt = await bcrypt.genSalt(10)
        newUser.password = await bcrypt.hash(password, salt)

        await newUser.save()
        res.status(200).json({Message: "Registered Successfully"})

    }catch(error) {
        console.log(error)
        res.status(500).json({Message: "Server Error"})
    }
       
}
exports.RegisterUser = async(req, res) => {
    try{
        const { name, email, mobileNo } = req.body
        const ExitsUser = await User.findOne({email})
        if(ExitsUser){
            return res.status(404).json({Message: "User already Exits"})
        }
        const user = new User({
            name,
            email,
            mobileNo
        })

        await user.save()

        let config = {
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: "ayslcokpwrdqmaau"
            }
        }
        let transporter = nodemailer.createTransport(config)

        let message = {
            from: process.env.EMAIL,
            to: email,
            subject: `Hello ${name}... `,
            html: `I received your Details ${name}`
        }
        transporter.sendMail(message)

        res.status(200).json({Message: "Registered SuccessFully", user})

    
   }catch(error) {
   console.log(error)
   res.status(500).json({Message: " Register page Server Error try again"})
}
}

exports.getAdminData = async(req, res) => {
    try{
        const user = await User.find()
        res.status(200).json({ Success: true, user })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ Message: "sever error"})
    }
}
exports.Login = async(req, res) => {
    try{
        const {email, password} = req.body
        const user = await Admin.findOne({email})
        if(!user){
            return res.status(404).json({Message: "Invalid Email or Password"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(404).json({Message: "Invalid Email or Password"})
        }
        const token = await jwt.sign({id: user._id}, process.env.SECRET_KEY)
        res.status(200).json({Message: "Login Successfully", token})
    }catch(error) {
        console.log(error)
        res.status(500).json({Message: "Server Error"})
    }
}