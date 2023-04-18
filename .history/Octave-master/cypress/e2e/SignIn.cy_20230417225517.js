describe('Testing Sign in page', () => {
  
  it('Firebase error if form is submitted and no email is entered', () => {
    cy.visit('http://localhost:3000/')
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("invalid-email")
  })

  it('Firebase error if no password is entered for email', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type('fake@email.com')
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("Firebase: Error")
  })




})