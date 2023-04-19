describe('Testing Sign up page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > p:nth-child(4) > button').click()

  
  })

  FAULT, can submit with no name
  it('error if form is submitted and no name is entered', () => {
    function generateRandomString(length) {
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
    const randomEmail = `${generateRandomString(10)}@${generateRandomString(5)}.com`;

    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(2) > input').type(randomEmail)
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(3) > input').type("password")
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("Firebase: Error")
  })


  
  it('error if form is submitted and no email is entered', () => {

    
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type("Sky")
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(3) > input').type("password")
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("Firebase: Error")
  })

  it('error if form is submitted and no password is entered', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type("Sky")
    cy.randomEmail().then((randomEmail) => {
      cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(2) > input').type(randomEmail)
    });    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("Firebase: Error")
  })

  it('error if form is submitted and no email is entered', () => {
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("Firebase: Error")
  })

  it('error if url is not an url', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type("Sky")
    cy.randomEmail().then((randomEmail) => {
      cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(2) > input').type(randomEmail)
    });
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(3) > input').type("password")
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(4) > input').type("sky")
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("invalid url")

  })

  it('Sign in button navigates to sign in page', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > p > button').click()
    cy.contains("SIGN IN")
  })



})