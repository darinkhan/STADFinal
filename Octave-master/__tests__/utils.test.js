/**
 * @jest-environment jsdom
 */

import * as common from "../src/utils/common";
import * as playerUtils from "../src/utils/player-utils";
import * as songUtils from "../src/utils/song-utils";


/*
-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------|---------|----------|---------|---------|-------------------
All files        |     100 |    94.44 |     100 |     100 |                   
 common.js       |     100 |      100 |     100 |     100 |                   
 player-utils.js |     100 |      100 |     100 |     100 |                   
 song-utils.js   |     100 |    92.85 |     100 |     100 | 32                
-----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       5 failed, 28 passed, 33 total
Snapshots:   0 total
Time:        0.688 s, estimated 1 s
*/


// Testing functions in common.js
// Using whitebox testing to achieve full statement coverage
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
    });
});

// Testing functions in player-utils.js
// Using whitebox testing to achieve full statement coverage
describe('player-utils.js', () => {
    it('calculateDurationTime returns string in format mm:ss', () => {
        expect(playerUtils.calculateDurationTime(0)).toBe('0:00');
        expect(playerUtils.calculateDurationTime(30)).toBe('0:30');
        expect(playerUtils.calculateDurationTime(60)).toBe('1:00');
        expect(playerUtils.calculateDurationTime(630)).toBe('10:30');
        expect(playerUtils.calculateDurationTime(6000)).toBe('100:00');
    });
    it('calculateCurrentTime returns string in format mm:ss', () => {
        expect(playerUtils.calculateCurrentTime(0)).toBe('0:00');
        expect(playerUtils.calculateCurrentTime(30)).toBe('0:30');
        expect(playerUtils.calculateCurrentTime(60)).toBe('1:00');
        expect(playerUtils.calculateCurrentTime(630)).toBe('10:30');
        expect(playerUtils.calculateCurrentTime(6000)).toBe('100:00');

    });
});

// example songs to test storage
const exampleSong1 = {
    name: "Bujji",
    artist: "Anirudh",
    url: "https://dslink.xyz/Masstamilan.In/Jagame%20Thanthiram/Bujji-Masstamilan.In.mp3",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgqVN3Iy5Y4XJeXK10n0o4_GZ_YfGE35JtQ&usqp=CAU",
};
const exampleSong2 = {
    name: "paris",
    artist: "Chainsmokers",
    url: "https://data.mymp3app.com/320/the-chainsmokers-paris-lyric.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-000241607187-d5elh4-t500x500.jpg",
};

// Testing functions in player-utils.js
// Using whitebox testing to achieve full statement coverage
describe('song-utils.js', () => {    
    it('getRandomSong returns object with information', () => {
        const song = songUtils.getRandomSong();
        // check it has the properties with the right type
        expect(song).toHaveProperty('name', expect.any(String));
        expect(song).toHaveProperty('artist', expect.any(String));
        expect(song).toHaveProperty('url', expect.any(String));
        expect(song).toHaveProperty('imageUrl', expect.any(String));
    });

    describe('localStorage', () => {
        // reset localStorage before each test
        beforeEach(() => {
            window.localStorage.clear();
            window.localStorage.setItem("RECENT_SONGS", JSON.stringify([]));
        });
        it('getRecentSongsLocalStorage when newly initialized returns empty array', () => {
            const songs = songUtils.getRecentSongsLocalStorage();
            expect(songs).toStrictEqual([]);
            expect(songs).toHaveLength(0);
        });
        it('getRecentSongsLocalStorage returns array of correct length', () => {
            window.localStorage.setItem("RECENT_SONGS", JSON.stringify([exampleSong1, exampleSong2]));
            expect(songUtils.getRecentSongsLocalStorage()).toHaveLength(2);
        })
        it('successfully and accurately adds songs', () => {
            // no songs
            let songs = songUtils.getRecentSongsLocalStorage();
            expect(songs).toHaveLength(0);

            // add the first song
            songUtils.setRecentSongsLocalStorage(exampleSong1);
            songs = songUtils.getRecentSongsLocalStorage()
            expect(songs[0]).toStrictEqual(exampleSong1);
            expect(songs).toHaveLength(1);

            // add second song
            songUtils.setRecentSongsLocalStorage(exampleSong2);
            songs = songUtils.getRecentSongsLocalStorage();
            expect(songs).toHaveLength(2);
        });
        it('can not add duplicate songs', () => {
            // add two of the same songs
            songUtils.setRecentSongsLocalStorage(exampleSong1);
            songUtils.setRecentSongsLocalStorage(exampleSong1);
            expect(songUtils.getRecentSongsLocalStorage()).toHaveLength(1);
        }) ;
        it('cannot add more than 5 songs to local storage', () => {
            // initialize to 5 songs
            window.localStorage.setItem("RECENT_SONGS", JSON.stringify([{name: "song1",artist: "name",url: "example.com",imageUrl:"example.com"},{name: "song2",artist: "name",url: "example.com",imageUrl:"example.com"},{name: "song3",artist: "name",url: "example.com",imageUrl:"example.com"},{name: "song4",artist: "name",url: "example.com",imageUrl:"example.com"},{name: "song5",artist: "name",url: "example.com",imageUrl:"example.com"}]));
            expect(songUtils.getRecentSongsLocalStorage()).toHaveLength(5);

            // length should not change after adding 6th song
            songUtils.setRecentSongsLocalStorage(exampleSong1);
            expect(songUtils.getRecentSongsLocalStorage()).toHaveLength(5)
        });
    });

    describe('sessionStorage', () => {
        // reset sessionStorage before each test
        beforeEach(() => {
            window.sessionStorage.clear();
        });

        it('getSongSessionStorage when newly initialized returns empty array', () => {
            const songs = songUtils.getSongSessionStorage();
            expect(songs).toStrictEqual([]);
            expect(songs).toHaveLength(0);
        });
        it('getSongSessionStorage returns array of correct length', () => {
            window.sessionStorage.setItem("SONG_LIST", JSON.stringify([exampleSong1, exampleSong2]));
            expect(songUtils.getSongSessionStorage()).toHaveLength(2);
        })
        it('successfully and accurately adds songs', () => {
            // no songs
            let songs = songUtils.getSongSessionStorage();
            expect(songs).toHaveLength(0);

            // add the first song
            songUtils.setSongSessionStorage(exampleSong1);
            songs = songUtils.getSongSessionStorage()
            expect(songs[0]).toStrictEqual(exampleSong1);
            expect(songs).toHaveLength(1);

            // add second song
            songUtils.setSongSessionStorage(exampleSong2);
            songs = songUtils.getSongSessionStorage();
            expect(songs).toHaveLength(2);
        });
        it('can not add duplicate songs', () => {
            // add two of the same songs
            songUtils.setSongSessionStorage(exampleSong1);
            songUtils.setSongSessionStorage(exampleSong1);
            expect(songUtils.getSongSessionStorage()).toHaveLength(1);
        });
        it('successfuly removes song with correct index', () => {
            songUtils.setSongSessionStorage(exampleSong1);
            songUtils.setSongSessionStorage(exampleSong2);
            const result = songUtils.removeSongAndReturnSessionStorage(exampleSong2);
            // first index should contain remaining songs
            expect(result[0]).toStrictEqual([exampleSong1]);
            // second index contains index where it was removed
            expect(result[1]).toBe(1);
        });
        // BUG: unspecified behavior - what happens when you request to delete a song that doesn't exist
        it('removing song that does not exist', () => {
            songUtils.setSongSessionStorage(exampleSong1);
            const result = songUtils.removeSongAndReturnSessionStorage(exampleSong2);
            expect(result[0]).toStrictEqual([exampleSong1]); // should remain the same
            expect(result[1]).toBeNull();
        });
        // BUG: specifications are written incorrectly- no songs are popped
        it('getNextSong is accurate', () => {
            songUtils.setSongSessionStorage({name: "song0",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song1",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song2",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song3",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song4",artist: "name",url: "example.com",imageUrl:"example.com"});

            const nextSong = songUtils.getNextSong(1);
            expect(nextSong).toStrictEqual({name: "song2",artist: "name",url: "example.com",imageUrl:"example.com"});
        });
        // BUG: no error checking for finding the next song after the last song
        it('getNextSong at the last index', () => {
            songUtils.setSongSessionStorage({name: "song0",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song1",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song2",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song3",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song4",artist: "name",url: "example.com",imageUrl:"example.com"});
            expect(()=>{
                songUtils.getNextSong(4)
            }).toThrow();
        });
        // BUG: no error checking for finding the next song after an invalid index
        it ('getNextSong at invalid index', () => {
            songUtils.setSongSessionStorage({name: "song4",artist: "name",url: "example.com",imageUrl:"example.com"});
            expect(()=>{
                songUtils.getNextSong(-1)
            }).toThrow();
            expect(()=>{
                songUtils.getNextSong(6)
            }).toThrow();
        })
        it('getPreviousSong is accurate', () => {
            songUtils.setSongSessionStorage({name: "song0",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song1",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song2",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song3",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song4",artist: "name",url: "example.com",imageUrl:"example.com"});

            const nextSong = songUtils.getPreviousSong(1);
            expect(nextSong).toStrictEqual({name: "song0",artist: "name",url: "example.com",imageUrl:"example.com"});
        });
        // BUG: no error checking for finding the next song before the first song
        it('getPreviousSong at the first index', () => {
            songUtils.setSongSessionStorage({name: "song0",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song1",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song2",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song3",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song4",artist: "name",url: "example.com",imageUrl:"example.com"});
            expect(()=>{
                songUtils.getPreviousSong(0)
            }).toThrow();
        });
        // BUG: no error checking for finding the next song before an invalid index
        it ('getPreviousSong at invalid index', () => {
            songUtils.setSongSessionStorage({name: "song4",artist: "name",url: "example.com",imageUrl:"example.com"});
            expect(()=>{
                songUtils.getPreviousSong(-1)
            }).toThrow();
            expect(()=>{
                songUtils.getPreviousSong(6)
            }).toThrow();
        })
        it('playNewSong when song exists in session and it is after current index', () => {
            // start with two songs
            songUtils.setSongSessionStorage({name: "song0",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song1",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage(exampleSong1);
            songUtils.setSongSessionStorage({name: "song3",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song4",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.playNewSong(1, exampleSong1); // found at index 2, curr at 1

            // resultant list should be the queued song first followed by every song after current index (not inclusive)
            const songs = songUtils.getSongSessionStorage();
            expect(songs).toHaveLength(3);
            expect(songs[0]).toStrictEqual(exampleSong1);            
        });
        it('playNewSong when song exists in session and it is before current index', () => {
            // start with two songs
            songUtils.setSongSessionStorage(exampleSong1);
            songUtils.setSongSessionStorage({name: "song1",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song2",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song3",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song4",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.playNewSong(2, exampleSong1); // found at index 0, curr at 2

            // resultant list should be the queued song first followed by every song after current index (not inclusive)
            const songs = songUtils.getSongSessionStorage();
            expect(songs).toHaveLength(3);
            expect(songs[0]).toStrictEqual(exampleSong1);            
        });
        it('playNewSong when song does not exist in session and session is empty', () => {
            // then it gets added into the session as the only song
            songUtils.playNewSong(-1, exampleSong1);
            const songs = songUtils.getSongSessionStorage();
            expect(songs).toHaveLength(1);
            expect(songs[0]).toStrictEqual(exampleSong1);
        });
        // BUG: unspecified behavior- should the current song playing be skipped?
        it('playNewSong when song does not exist in session and session is non-empty', () => {
            // start with two songs
            songUtils.setSongSessionStorage({name: "song0",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song1",artist: "name",url: "example.com",imageUrl:"example.com"});
            songUtils.setSongSessionStorage({name: "song2",artist: "name",url: "example.com",imageUrl:"example.com"});
            // resultant list should be the queued song first followed by every song after current index (inclusive)
            songUtils.playNewSong(2, exampleSong1);
            const songs = songUtils.getSongSessionStorage();
            expect(songs).toHaveLength(1); // if we are already at the last song, we should just be playing this one because it will be skipped
            expect(songs[2]).toStrictEqual(exampleSong1);
        });



    });
});

