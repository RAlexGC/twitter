const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, 'tlozot', 'Alex')
        expect(user.username).toBe('tlozot')
        expect(user.name).toBe('Alex')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})