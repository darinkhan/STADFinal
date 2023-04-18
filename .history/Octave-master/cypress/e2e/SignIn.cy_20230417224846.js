describe('Sign in', () => {
  it('Has necessary contents on the sign in page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("SIGN IN")
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(4) > button > span.MuiButton-label").submit()

  })
})