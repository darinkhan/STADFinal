# STADFinal

This repository contains the code for our Software Testing and Debugging Final.

## How to run the tests:
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