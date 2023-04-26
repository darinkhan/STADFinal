describe('Testing home page', () => {

  before(() => {
    cy.visit('http://localhost:3000/')
    cy.login()
  })

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })


   //FAULT, can submit with no name
   it('Can view home page', () => {
    cy.contains("Hey there, thanks for Choosing Octave")
  })

  it('Can navigate to artist', () => {
    cy.contains("Hey there, thanks for Choosing Octave")
  })


  after(() => {
    cy.logout()
  })


})