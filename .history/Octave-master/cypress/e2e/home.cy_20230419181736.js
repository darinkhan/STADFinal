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
    cy.get("#root > div > div > div.app__window > div > div:nth-child(3) > div.row__songsContainer > div.row__songs > div > div").click()
    cy.url().should('include', 'artist')
  })

  it('Can play a songs audio', () => {
        // Create a spy on the AudioBufferSourceNode.prototype.start method
        cy.window().then((win) => {
          cy.spy(win.AudioBufferSourceNode.prototype, 'start').as('startAudio');
        });
    
        // Click the button
        cy.get('#root > div > div > div.app__window > div > div:nth-child(2) > div.row__songsContainer > div.row__songs > div > div > div.song__playButton > button').click();
    
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