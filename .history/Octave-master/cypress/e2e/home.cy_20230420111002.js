describe('Testing home page', () => {


  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

   it('Can view home page', () => {
    cy.login()
    cy.contains("Hey there, thanks for Choosing Octave")
  })

  it('Can navigate to artist', () => {
    cy.login()
    cy.get("#root > div > div > div.app__window > div > div:nth-child(3) > div.row__songsContainer > div.row__songs > div > div").click()
    cy.url().should('include', 'artist')
  })

  it('Can play a songs audio', () => {
    cy.login()
        // Click the button
        cy.get('#root > div > div > div.app__window > div > div:nth-child(2) > div.row__songsContainer > div.row__songs > div:nth-child(1) > div.song__playButton > button').click();
    
        cy.get('audio,video').should((els)=>{
          let audible = false
          els.each((i, el)=>{
            console.log(el)
            console.log(el.duration, el.paused, el.muted)
            if (el.duration > 0 && !el.paused && !el.muted) {
              audible = true
            }
      
            // expect(el.duration > 0 && !el.paused && !el.muted).to.eq(false)
          })
          expect(audible).to.eq(true)
        })
  })

  it('Can add song to favourites playlist', () => {
    cy.login()
    cy.get("#root > div > div > div.app__window > div > div:nth-child(2) > div.row__songsContainer > div.row__songs > div:nth-child(1) > div.song__option > button").click()
    cy.get("#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(3)").first().click()
    cy.contains('Song added')
  })

  //FAULT, can add the same song to a playlist
  it('Can add same song to favourites playlist twice', () => {
    cy.login()
    cy.get("#root > div > div > div.app__window > div > div:nth-child(2) > div.row__songsContainer > div.row__songs > div:nth-child(1) > div.song__option > button").click()
    cy.get("#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(3)").first().click()
    cy.contains('Firebase: Error')
  })

  //FAULT, cannot get all playlists
  it('Can add song to any playlist', () => {
    cy.logout()
    cy.login()
    cy.get("#root > div > div > div.app__window > div > div:nth-child(2) > div.row__songsContainer > div.row__songs > div:nth-child(1) > div.song__option > button").click()
    cy.get("#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(4)").first().click()
    cy.contains('home_playlist')
  })

  afterEach(() => {
    cy.logout()
  })


  after(() => {
    cy.logout()
  })


})