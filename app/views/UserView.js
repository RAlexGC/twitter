const UserService = require("../services/UserService");

class UserView {
    static createUser(payload){
        if (payload == null){
            const result = {error:'payload no existe'}
            return result
        }
        UserService.create(payload)
    }
}

module.exports = UserView