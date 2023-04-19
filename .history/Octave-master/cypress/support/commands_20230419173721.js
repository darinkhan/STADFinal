// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Function to create a random email
 */
Cypress.Commands.add('randomEmail', () => {
    function generateRandomString(length) {
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
  
    const randomEmail = `${generateRandomString(10)}@${generateRandomString(5)}.com`;
    return randomEmail;
  });


  /**
 * Function to login
 */
Cypress.Commands.add('login', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type('fake@gmail.com')
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(2) > input').type('password')
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
  });

    /**
 * Function to logout
 */
Cypress.Commands.add('logout', () => {
    cy.get('#root > div > div > div.navbar > div.navbar__right > button').click()
    cy.get("#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation0.MuiPaper-rounded > ul > li").click()
  });
