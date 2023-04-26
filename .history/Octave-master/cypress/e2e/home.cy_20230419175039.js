describe('Testing home page', () => {

  before(() => {
    cy.visit('http://localhost:3000/')
    cy.login()
  })


   //FAULT, can submit with no name
   it('Can view home page', () => {
    cy.contains("Hey there, thanks for Choosing Octave")
  })

  it('Can navigate to artist', () => {
    cy.get("#root > div > div > div.app__window > div > div:nth-child(3) > div.row__songsContainer > div.row__songs > div > div").click()
  })


  after(() => {
    cy.logout()
  })


})