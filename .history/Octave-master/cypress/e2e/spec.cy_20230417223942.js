describe('My First Test', () => {
  it('Has necessary contents on the sign in page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("SIGN IN")
  })
})