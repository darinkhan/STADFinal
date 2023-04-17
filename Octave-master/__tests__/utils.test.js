import * as common from "../src/utils/common";

// Testing the utility functions in common.js
describe('common', () => {
    // achieving full SC for isValidUrl()
    describe('isValidUrl', () => {
        it('given a valid url', () => {
            const url = 'https://jestjs.io/docs/getting-started';
            expect(common.isValidURL(url)).toBe(true);
        });
        it('given an invalid url', () => {
            const url = 'google';
            expect(common.isValidURL(url)).toBe(false);
        });
    });

    // achieving full SC for getRandomWelcomeText()
    describe('getRandomWelcomeText', () => {
        it('is one of either message', () => {
            const welcome_text = common.getRandomWelcomeText('bob');
            expect(welcome_text === 'Hey bob, continue listening to your Music' || welcome_text === "Hey bob, welcome back").toBeTruthy();
        });
    });
});