const express = require('express')
const { RegisterUser, Login, getAdminData, RegsiterAdmin } = require('../Controller/auth')
const { getMainDatas, getSingleMainData } = require('../Controller/MainDatas')
const { Aboutdata, AboutDetailsPage } = require('../Controller/About')
const { Servicedata, ServiceDetailsPage } = require('../Controller/Service')
const router = express.Router()

router.route('/register').post(RegisterUser)
router.route('/regadmin').post(RegsiterAdmin)
router.route('/login').post(Login)
router.route('/homeresults').get(getMainDatas)
router.route('/home/:id').get(getSingleMainData)
router.route('/service').get(Servicedata)
router.route('/service/:id').get(ServiceDetailsPage)
router.route('/ourstory').get(Aboutdata)
router.route('/about/:id').get(AboutDetailsPage)
router.route('/adminData').get(getAdminData)

module.exports = router