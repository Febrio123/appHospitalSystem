const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const validator = require("validator");
const bcrypt = require('bcrypt')


const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Nama User wajib Diisi"]
    },
    email: {
        type: String,
        required: [true, "Email Harus Diisi"],
        validate: {
            validator: validator.isEmail,
            message: 'Alamat email harus berformat example@gmail'
        }
    },
    password: {
        type: String,
        required: [true, "Password Wajib Diisi"]
    },
    role: {
        type: Schema.ObjectId,
        ref: "Roles",
        default: "66a72bf7cc26660474e61aba"
    }
})

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function (reqBody) {
    return await bcrypt.compare(reqBody, this.password)
}

const User = mongoose.model("User", userSchema)
module.exports = User