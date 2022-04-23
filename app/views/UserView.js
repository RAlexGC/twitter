const UserService = require("../services/UserService");

class UserView {
    static createUser(payload){
        if (payload == null){
            const result = {error:'payload no existe'}
            return result
        }
        if (payload.username == null || payload.name == null || payload.id == null){
            const result = {error:'necesitan tener un valor válido'}
            return result
        }
        UserService.create(payload)
    }
}

module.exports = UserView