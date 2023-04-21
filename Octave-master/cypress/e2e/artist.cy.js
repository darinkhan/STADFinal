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

  it('Testing Shadow Rapper (no songs) clicking', () => {
    cy.contains("Shadow Rapper").click()
    
    cy.contains("Shadow Rapper")
    cy.contains("up and coming")
  })

  it('Test that real artist contains songs', () => {
    cy.get('#root > div > div > div.app__window > div > div:nth-child(3) > div.row__songsContainer').contains('Justin Bieber').click()
    cy.contains("Baby baby baby oooh")
    cy.contains("Yummy")
    cy.contains("Baby")
  })

  it('Test that song plays from artist page', () => {
    cy.get('#root > div > div > div.app__window > div > div:nth-child(3) > div.row__songsContainer').contains('Justin Bieber').click()

    // Click the button
    cy.get('#root > div > div > div.app__window > div > div.artistpage__songlist > div:nth-child(1) > div:nth-child(3) > button').click();

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

  it('Test that adding song to queue from artist page functions properly', () =>{
    cy.get('#root > div > div > div.app__window > div > div:nth-child(3) > div.row__songsContainer').contains('Justin Bieber').click()
    cy.get('#root > div > div > div.app__window > div > div.artistpage__songlist > div:nth-child(1) > div.playlistsong__options > button').select(1)

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


  afterEach(() => {
    cy.logout()
  })
})