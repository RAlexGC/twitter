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

    test("3. Update username", () => {
        const user = UserService.create(1, 'tlozot', 'Alex')
        UserService.updateUsername(user,'NOTtlozot')
        expect(user.username).toBe('NOTtlozot')
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, 'tlozot1', 'Alex1')
        const user2 = UserService.create(2, 'tlozot2', 'Alex2')
        const user3 = UserService.create(3, 'tlozot3', 'Alex3')
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain('tlozot1')
        expect(usernames).toContain('tlozot2')
        expect(usernames).toContain('tlozot3')
    })

})