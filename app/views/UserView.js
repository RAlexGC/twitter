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
        if(typeof payload.username == 'undefined' || typeof payload.name == 'undefined' || typeof payload.id == 'undefined'){
            const result = {error:'necesitan tener un valor válido'}
            return result
        }
        const result = UserService.create(payload.id,payload.username,payload.name)
        return result
    }
}

module.exports = UserView