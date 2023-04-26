describe('Testing home page', () => {


  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.login()
    cy.get('#root > div > div > div.navbar > div.navbar__center > a:nth-child(2)').click()
  })


   it('Can view Library page', () => {
    cy.contains("My Library")
  })

  it('Can navigate to playlist', () => {
    cy.get("#root > div > div > div.app__window > div > div.library__playlists > div:nth-child(2)").click()
    cy.url().should('include', 'playlists')
  })

  it('Can open create and close playlist modal', () => {
    cy.get("#root > div > div > div.app__window > div > div.library__playlists > div.library__playlist.library__playlistCreate").click()
    cy.contains("Create New Playlist")
    cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button:nth-child(1)").click()
  })

  afterEach(() => {
    cy.logout()
  })


})