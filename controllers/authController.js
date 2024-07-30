const User = require('../models/user')

exports.register = async (req, res) => {
    try {
        const registerData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        })
        if (req.body.password !== req.body.confirmPassword) {
            return res.status(400).json({
                status: "Failed",
                message: "Password dan confirm Password tidak sama"
            })
        }
        return res.status(200).json({
            status: "Success",
            data: registerData
        })
    } catch (error) {
        return res.status(400).json({
            status: "Failed",
            message: error.stack
        })
    }
}