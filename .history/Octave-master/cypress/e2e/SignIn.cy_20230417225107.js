describe('Sign in', () => {
  it('Invalid email error if no email is entered', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("SIGN IN")
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("invalid-email")

  })
})