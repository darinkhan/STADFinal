describe('Testing home page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.login()
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