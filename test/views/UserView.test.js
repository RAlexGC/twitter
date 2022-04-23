const UserView = require("../../app/views/UserView")

describe("Tests for UserView", () => {
    test('1. Return an error object when try to create a new user with a null payload', () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

    test('2. Return an error object when try to create a new user with a payload with invalid properties', () => {
        const payload = {username:null, name:'Alex', id:1}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test('3. Return an error object when try to create a new user with a payload with missin properties', () => {
        const payload = {name:'Alex', id:1}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test('4. Create user by giving a valid payload', () => {
        const payload = {username:'tlozot', name:'Alex', id:1}
        const result = UserView.createUser(payload)
        expect(result.username).toBe('tlozot')
        expect(result.name).toBe('Alex')
        expect(result.id).toBe(1)
    })
})