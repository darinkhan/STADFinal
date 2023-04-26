describe('Testing Sign up page', () => {

  beforeEach(() => {
    cy.window().then(win => win.sessionStorage.clear());
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('http://localhost:3000/')
  
  })

  //FAULT, can submit with no name
  it('error if form is submitted and no name is entered', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(2) > input').type("fake@gmail.com")
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(3) > input').type("password")
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("invalid name")
  })
  
  it('error if form is submitted and no email is entered', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type("Sky")
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(3) > input').type("password")
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("invalid-email")
  })

  it('error if form is submitted and no password is entered', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type("Sky")
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(2) > input').type("fake@gmail.com")
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("invalid-password")
  })

  it('error if form is submitted and no email is entered', () => {
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("invalid-email")
  })

  it('error if url is not an url', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type("Sky")
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(2) > input').type("fake@gmail.com")
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