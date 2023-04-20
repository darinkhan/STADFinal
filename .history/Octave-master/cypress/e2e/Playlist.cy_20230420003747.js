describe('Testing playlist page', () => {


  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.login()
    cy.get('#root > div > div > div.navbar > div.navbar__center > a:nth-child(2)').click()
    cy.get('#root > div > div > div.app__window > div > div.library__playlists > div:nth-child(2)').click()
  })
  
   it('Can view favorite playlist', () => {
    cy.contains("favorites")
  })

  afterEach(() => {
    cy.logout()
  })


})