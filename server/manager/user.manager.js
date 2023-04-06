const userModel = require("../models/user.model")
const registerUser = async(body)=> {
    try {
        console.log(body)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    registerUser
}