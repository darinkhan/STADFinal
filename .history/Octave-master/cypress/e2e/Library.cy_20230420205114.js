describe('Testing library page', () => {


  beforeEach(() => {
    cy.visit('http://localhost:3000/')

  })


   it('Can view Library page', () => {
    cy.login()
    cy.get('#root > div > div > div.navbar > div.navbar__center > a:nth-child(2)').click()
    cy.contains("My Library")
  })

  it('Can navigate to playlist', () => {
    cy.login()
    cy.get('#root > div > div > div.navbar > div.navbar__center > a:nth-child(2)').click()
    cy.get("#root > div > div > div.app__window > div > div.library__playlists > div:nth-child(2)").click()
    cy.url().should('include', 'playlists')
  })

    //FAILURE newly created playlists not show, fault found in backend testing
    it('Can create a playlist', () => {
      let countBefore, countAfter;
      cy.get("#root > div > div > div.app__window > div > div.library__playlists")
            .find('.library_playlist')
            .then(($value) => {
              countBefore = $value.length
            })
      cy.get("#root > div > div > div.app__window > div > div.library__playlists > div.library__playlist.library__playlistCreate").click()
      cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > form > input').type("playlist")
      cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary').click()
      cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button:nth-child(1)").click()
  
      cy.get("#root > div > div > div.app__window > div > div.library__playlists")
      .find('.library_playlist')
      .then(($value) => {
        countAfter = $value.length
        expect(countAfter).to.be.moreThan(countBefore); // assert that the count has increased
  })
    })

  it('Can open create and close playlist modal', () => {
    cy.logout()
    cy.login()
    cy.get('#root > div > div > div.navbar > div.navbar__center > a:nth-child(2)').click()
    cy.get("#root > div > div > div.app__window > div > div.library__playlists > div.library__playlist.library__playlistCreate").click()
    cy.contains("Create New Playlist")
    cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button:nth-child(1)").click()
  })



  afterEach(() => {
    cy.logout()
  })


})