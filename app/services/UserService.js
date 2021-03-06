const User = require("./../models/user");

class UserService {
    static create(id, username, name){
        return new User(id, username, name, 'Sin bio')
    }

    static getInfo(user){
        return [user.id,user.username,user.name,user.bio]
    }

    static updateUsername(user,newUsername){
        user.username = newUsername
        return user
    }

    static getAllUsernames(userList){
        return userList.map(user => user.username)
    }
}

module.exports = UserService