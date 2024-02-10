const express = require('express')
const { getcontacts, Postcontacts } = require('../controllers/contactController')

const router = express.Router()




router.route('/').post(Postcontacts)
module.exports = router