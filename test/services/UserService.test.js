const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, 'tlozot', 'Alex')
        expect(user.username).toBe('tlozot')
        expect(user.name).toBe('Alex')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, 'tlozot', 'Alex')
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe('tlozot')
        expect(userInfoList[2]).toBe('Alex')
        expect(userInfoList[3]).toBe('Sin bio')
    })
})