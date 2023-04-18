import { getArtists } from "../src/api/artist";

// Testing the APIs related to Artist
describe('Artist', () => {
    test('get', () => {
        return getArtists().then(data => {
            expect(data).toBeDefined()
            // expect(data.entity.name).toEqual('Koen van Gilst')
        })
    })
});

