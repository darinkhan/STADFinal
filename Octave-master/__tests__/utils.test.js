import * as common from "../src/utils/common";
import { calculateCurrentTime, calculateDurationTime } from "../src/utils/player-utils";

// Testing the utility functions in common.js
// Using whitebox testing to achieve full statement coverage

/*
RESULTS of 
> yarn test utils --collectCoverage
-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------|---------|----------|---------|---------|-------------------
All files  |     100 |      100 |     100 |     100 |                   
 common.js |     100 |      100 |     100 |     100 |                   
-----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.398 s, estimated 1 s
*/

describe('common.js', () => {
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

    // achieving full SC for capitalize()
    describe('capitalize', () => {
        it('makes first letter uppercase', () => {
            expect(common.capitalize('hello there')).toBe('Hello there');
        });
    });

    // achieving full SC for createNamesArray()
    describe('createNameArray', () => {
        it('makes array', () => {
            expect(common.createNamesArray('hello!')).toStrictEqual(['h', 'he','hel', 'hell','hello', 'hello!',]);
        });
    });

    // achieving full SC for capitalizeAllWords()
    describe('capitalizeAllWords', () => {
        it('makes first letter of each word', () => {
            expect(common.capitalizeAllWords('hello there')).toBe('Hello There');
            expect(common.capitalizeAllWords('Hello there')).toBe('Hello There');
        });
    });

    // achieving full SC for createNamesArrayWithCaptitalizedWords()
    describe('createNamesArrayWithCaptitalizedWords', () => {
        it('makes array', () => {
            expect(common.createNamesArrayWithCaptitalizedWords('hello! hi')).toStrictEqual(['H', 'He','Hel', 'Hell', 'Hello', 'Hello!', 'Hello! ', 'Hello! H', 'Hello! Hi',]);
        });
    });

    // achieving full SC for getRandomPlaylistImage()
    describe('getRandomPlaylistImage', () => {
        it('returns a valid image url', () => {
            const url = common.getRandomPlaylistImage('bob');
            expect(
                url === 'https://firebasestorage.googleapis.com/v0/b/music-streaming-app-4a392.appspot.com/o/images%2Fno-music-cover.png?alt=media&token=c331e7e9-fbb6-41bd-8b63-706bd70429c7' ||
                url === 'https://www.soundlaunch.com/cover_photos/default_cover.jpg' ||
                url === 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/abstract-music-cd-cover-art-design-template-e43d2f90de58fd720f97f7e8068bb4f8_screen.jpg?ts=1570368591' ||
                url === 'https://upload.wikimedia.org/wikipedia/en/c/c9/Zedd-True-Colors.png' ||
                url === 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJL-5T0rDIVexjW4ndJko_z_YnBtFmTRauQ&usqp=CAU'
            ).toBeTruthy();          
        });
    });

    // handle error
    describe('handleError', () => {
        it('prints to console', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            common.handleError('Testing handleError is printing to logs');
            expect(consoleSpy).toHaveBeenCalledWith('Testing handleError is printing to logs');
        })
    })
});

describe('player-utils.js', () => {
    it('calculateDurationTime is in string format mm:ss', () => {
        expect(calculateDurationTime(0)).toBe('0:00');
        expect(calculateDurationTime(30)).toBe('0:30');
        expect(calculateDurationTime(60)).toBe('1:00');
        expect(calculateDurationTime(630)).toBe('10:30');
        expect(calculateDurationTime(6000)).toBe('100:00');
    });
    it('calculateCurrentTime', () => {
        expect(calculateCurrentTime(0)).toBe('0:00');
        expect(calculateCurrentTime(30)).toBe('0:30');
        expect(calculateCurrentTime(60)).toBe('1:00');
        expect(calculateCurrentTime(630)).toBe('10:30');
        expect(calculateCurrentTime(6000)).toBe('100:00');

    })
});