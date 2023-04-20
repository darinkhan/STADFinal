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
    cy.get("#root > div > div > div.app__window > div > div:nth-child(3) > div.row__songsContainer > div.row__songs > div > div").click()
        // Create a spy on the AudioBufferSourceNode.prototype.start method
        cy.window().then((win) => {
          cy.spy(win.AudioBufferSourceNode.prototype, 'start').as('startAudio');
        });
    
        // Click the button
        cy.get('#root > div > div > div.app__window > div > div:nth-child(2) > div.row__songsContainer > div.row__songs > div > div > div.song__playButton > button').click();
    
        // Wait for a brief moment to let the audio start playing
        cy.wait(500);
    
        // Check if the 'start' method was called
        cy.get('@startAudio').should('be.calledOnce');

    cy.url().should('include', 'artist') // => true
  })



  afterEach(() => {
    cy.logout()
  })


})