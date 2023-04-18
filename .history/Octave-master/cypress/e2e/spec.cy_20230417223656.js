describe('My First Test', () => {
  it('Visits sign in website', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("sign in")
  })
})