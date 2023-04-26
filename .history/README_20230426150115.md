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
For front-end coverage, we had an overall 97.3% statement coverage. We were unable to cover a few lines due to unreachable statements and functions related to file upload, which was difficult to do through these modules. See the full coverage result in `/coverage.txt`.

### Backend
