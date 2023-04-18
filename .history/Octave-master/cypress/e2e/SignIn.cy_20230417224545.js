describe('Sign in', () => {
  it('Has necessary contents on the sign in page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("SIGN IN")
    cy.get("/html/body/div/div/div/div/div[1]/form/div[4]/button/span[1]").click()

  })
})