describe('Testing Artist page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.login()
    cy.contains("Artist")
  })

  it('Testing Navigation to Artist Page From Home', () => {
    cy.get("#root > div > div > div.app__window > div > div:nth-child(3) > div.row__songsContainer > div.row__songs > div:nth-child(1)").click()
    cy.url().should('include', 'artist')
  })

  it('Testing Artist Page Shows No Songs', () => {
    cy.get("#root > div > div > div.app__window > div > div:nth-child(3) > div.row__songsContainer > div.row__songs > div:nth-child(1)").click()
    cy.contains("No Songs")
  })

  it('Testing Shadow Rapper clicking', () => {
    cy.contains("Shadow Rapper").click()
    
    cy.contains("Shadow Rapper")
    cy.contains("up and coming")
  })


  afterEach(() => {
    cy.logout()
  })

  // after(() => {
  //   cy.logout()
  // })

})