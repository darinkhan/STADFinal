describe('Testing Sign in page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Firebase error if form is submitted and no email is entered', () => {
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("invalid-email")
  })

  it('Firebase error if no password is entered for email', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type('fake@email.com')
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("Firebase: Error")
  })

  it('Auth error if new user tries to sign in without creating an account', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type('fake@email.com')
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(2) > input').type('password')
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("Firebase: Error")
    cy.contains("user-not-found")

  })




})