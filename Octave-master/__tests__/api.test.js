import { getArtists } from "../src/api/artist";
describe('Artist', () => {
    test('test', () => {
        console.log('heloo');
        expect(true).toBe(true);
    })
    test('get', () => {
        return getArtists().then(data => {
            expect(data).toBeDefined()
            // expect(data.entity.name).toEqual('Koen van Gilst')
        })
    })
    // test('upload', async () => {
    //     const name = 'HELLO';
    //     const names = createNamesArrayWithCaptitalizedWords(formData.name);
    //     const { description, imageUrl } = formData;
    //     const data = { description, name, names, imageUrl };
    //     await addArtist(data);
    // })
});

// import * as common from "../src/utils/common";

// describe('common', () => {
//     // achieving full SC for isValidUrl()
//     describe('isValidUrl', () => {
//         it('given a valid url', () => {
//             const url = 'https://jestjs.io/docs/getting-started';
//             expect(common.isValidURL(url)).toBe(true);
//         });
//         it('given an invalid url', () => {
//             const url = 'google';
//             expect(common.isValidURL(url)).toBe(false);
//         });
//     });

//     // achieving full SC 
//     describe('getRandomWelcomeText', () => {
//         it('is one of either message', () => {
//             const welcome_text = common.getRandomWelcomeText('bob');
//             expect(welcome_text === 'Hey bob, continue listening to your Music' || welcome_text === "Hey bob, welcome back").toBeTruthy();
//         });
//     });
// });