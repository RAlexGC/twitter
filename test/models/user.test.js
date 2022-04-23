const User = require("../../app/models/user")

describe("Unit Tests for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, 'tlozot', 'Alejandro Gtz', 'Bio')
        expect(user.id).toBe(1)
        expect(user.username).toBe('tlozot')
        expect(user.name).toBe('Alejandro Gtz')
        expect(user.bio).toBe('Bio')
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
    test('Add getters', () => {
        const user = new User(1, 'tlozot', 'Alejandro Gtz', 'Bio')
        expect(user.getUsername).toBe('tlozot')
        expect(user.getBio).toBe('Bio')
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
    test('Add setters', () => {
        const user = new User(1, 'tlozot', 'Alejandro Gtz', 'Bio')
        user.setUsername = 'AlexGtz'
        expect(user.username).toBe('AlexGtz')
        user.setBio = 'New bio'
        expect(user.bio).toBe('New bio')
    })
})