const Roles = require('../models/roles')

exports.addRoles = async (req, res) => {
    const name = req.body.name
    try {
        const rolesData = await Roles.create({
            name: name
        })
        return res.status(200).json({
            data: rolesData
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

exports.getRoles = async (req, res) => {
    try {
        const getRole = await Roles.find()
        return res.status(200).json({
            data: getRole
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}



