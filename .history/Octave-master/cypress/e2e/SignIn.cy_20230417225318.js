describe('Testing Sign in page', () => {
  
  it('Invalid email error if no email is entered', () => {
    cy.visit('http://localhost:3000/')
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("invalid-email")
  })

  it('Invalid password error if no password is entered', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.action-email').type('fake@email.com')
    cy.contains("invalid-email")
  })




})