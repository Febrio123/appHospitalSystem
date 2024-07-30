const express = require('express')
const roleRoutes = express.Router()
const { addRoles, getRoles } = require('../controllers/rolesController')

roleRoutes.get('/role', getRoles)
roleRoutes.post('/role', addRoles)

module.exports = roleRoutes