describe('Testing home page', () => {

  before(() => {
    cy.visit('http://localhost:3000/')
    cy.login()
  })

   //FAULT, can submit with no name
   it('Can view home page', () => {
    cy.contains("Hey there")
  })

  before(() => {
    cy.logout()
  })


})