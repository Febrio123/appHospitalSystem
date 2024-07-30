const express = require('express')
const userRoutes = express.Router()
const { register } = require("../controllers/authController")

userRoutes.post('/register', register)

module.exports = userRoutes

