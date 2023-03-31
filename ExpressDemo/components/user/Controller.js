

const userService = require('./Service');

const login = async (email, password) => {
    try {
        return await userService.login(email, password);
    } catch (error) {
        throw error
    }
}

module.exports = { login };