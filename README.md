# STADFinal

Testing Octave, a music streaming web app made with React and Firebase. The live software under test can be viewed [here](https://octave-music.web.app/).

## Run Instructions

1. Clone this repository

2. If you do not have Yarn installed, install it.

   ```
   sudo npm install --global yarn
   ```

   Or,

   ```
   curl -o- -L https://yarnpkg.com/install.sh | bash
   ```

   If you are having trouble, please reference this website: https://www.hostinger.com/tutorials/how-to-install-yarn

3. Go to the source depository with
   ```
   cd Octave-master
   ```
4. Install the dependencies.
   ```
   yarn install
   ```
5. Start the backend

   ```
   npm start
   ```

6. To run the tests:

- For running the front end test,

  - run `npx cypress open` and then navigate through the Cypress popup until you can select "ECE Testing" when prompted with choosing the testing type.
  - Another way to run is using `npx cypress run`

- For the back end test,these are all different ways to run the tests:
  - run `yarn test` to run all tests
  - run `yarn test --collectCoverage` to run all the tests and collect coverage
  - run `yarn test [filename]` to run the tests in `[filename]`.

## File stucture

`Octave-master/src/` contains the instrumented code done with istanbul. This is necessary to collect coverage, and does not functionally change the code.

`Octave-master/src-non-instrumented/` contains the original code without instrumentation. This is the SUT.

`Octave-master/__tests__/` contains all the test files needed to test the backend.

- `api.test.js` tests all the files in the `Octave-master/src/api/` file except for `auth.js`.
- `mock.test.js` tests the `Octave-master/src/api/auth.js` file using mocks.
- `utils.test.js` tests all the utility functions in `Octave-master/src/utils/`.

`Octave-master/cypress/` contains the front-end tests located in the `e2e/` folder. The output files such as screenshots will be generated in `screenshots/` after running the tests.

## Faults

### Frontend

Home page:

- Can add same song to favourites playlist twice
- Cannot add song to any playlist besides the favourites playlist
  Sign up page:
- No validation for URL
- No validation for name
  Admin page:
- No validation for name of artist
  Library page;
- Playlist creation not working

We found 6 faults across 4 pages. See screenshots of failures by going to Octave-master > cypress > screenshots or Octave-master > cypress > videos. **Note** that these screenshots and videos are cleared and re-created when tests are run using **npx cypress run**

Most of the failures are from a lack of input validation. Furthermore, there are faults in the backend that stem from retreiving data from the playlists that prevent some user interactions from being performed. See below for more information.

### Backend

song-utils.js › sessionStorage › getNextSong at the last index
song-utils.js › sessionStorage › getNextSong at invalid index
song-utils.js › sessionStorage › getPreviousSong at the first index
song-utils.js › sessionStorage › getPreviousSong at invalid index

- The four tests above failed because we there is no input checking in the function `songUtils.getPreviousSong()` and `songUtils.getNextSong()`. This means that when we try to run the function on error-prone boundaries, it would result in an error. For example, you shouldn't be able to get the next song when we are already at the last song.

song-utils.js › sessionStorage › playNewSong when song does not exist in session and session is non-empty

- There was a behavior error in the function `songUtils.playNewSong()`. When we play a new song, the current song continues to stay in the queue. This is not the right behavior because normally when you move to a new song, the current song should be skipped.

playlist.js › getAllPlaylist runs without error
playlist.js › getAllPlaylist runs without error without cb
playlist.js › get playlist songs without error

- These three functions related to `songUtils.getAllPlaylist()` all resulted in errors because of firebase. We get the same error stating that we don't have indexing. However, we are unable to set that up because we are not given instructions by the developers.

## Coverage

### Frontend

We have 100% actions coverage (adding songs, playing songs, adding artists, adding to playlists, etc) when **excluding unreachable code in currentSessionActions.js and playlistActions.js dude to backend faults. Everything we could not reach from the GUI testing was reached and evaluated in backend testing**. We used actions coverage as a metric as it covers all of the distinct interactions a user can do with the application. To view coverage for cypress tests, go to Octave-master > coverage > lcov-report > index.html. This report is generated when running `npx cypress run`.

### Backend

For back-end coverage, we had an overall 97.3% statement coverage. We were unable to cover a few lines due to unreachable statements and functions related to file upload, which was difficult to do through these modules. See the full coverage result in `/coverage.txt`.

## Updates from proposal

We decided against doing load and security testing since the application is using Firebase and utilizes a lot of Google's robust resources. Therefore, it would have been a pointless effort as no faults would be discovered. **Instead, we decided to conduct extensive non-functional tests to detect more faults. We also added addition unit and integration tests on the backend to achieve 97.3% statement coverage**

## Non-functional tests

### GUI Testing

For our non functional testing, we tested both the application UI and documentation. We gave the Octave application to 10 users with no prior exposure to Octave, and asked them to complete a series of tasks. These included:

1. Adding a song to the favourites playlist
2. Adding a new playlist
3. Adding a song to the database
4. Adding an artist to the database
5. Playing a song
6. Queuing a song
7. Search up an existing song
8. Search up an existing artist

All 10 users were able to complete most tasks. However, none were able to add a song or artist to the database, and most were confused about whether they actually managed to create a new playlist (since the application had an error where it would not create/show new playlists, as mentioned earlier).

We also asked them to fill out a survey after they were done. The survey asked them to rate the application on a scale of 1-5 on ease of use, and the application got an average score of 3.70.

### Documentation Testing

For documentation testing, each group member attempted to create a new instance of the application using the documentation provided. We found that the documentation was not very clear, and was missing a lot of steps. For example, the documentation did not mention the variables needed in the firebase config file, as well as the steps that were needed to create the firebase project indexes that were mentioned.

We also gave the documentation to another computer science student, who ran into the same issues. Additionally, they did not understand the firebase commands and where to find API keys, as they did not have prior experience with Firebase; the documentation did not provide any significant information on where to find these required keys (other than that they were needed).
