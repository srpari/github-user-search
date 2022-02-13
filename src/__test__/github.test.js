// const github = require('../github')

import { getUser } from '../context/SearchState';

// jest.mock('../request')

// A simple example test
describe('#getUser() using Promises', () => {
    it('should load user data', () => {
        return getUser('srpari')
            .then(data => {
                expect(data).toBeDefined()
                expect(data.entity.name).toEqual('Pari Ramamoorthy')
            })
    })
})

// // The exact same test using async/await
// describe('#getUser() using async/await', () => {
//     it('should load user data', async () => {
//         const data = await getUser('vnglst')
//         expect(data).toBeDefined()
//         expect(data.entity.name).toEqual('Koen van Gilst')
//     })
// })