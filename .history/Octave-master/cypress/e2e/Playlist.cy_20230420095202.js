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

  it('Can play a song in the playlist', () => {
    
    // Click the button
    cy.get('#root > div > div > div.app__window > div > div.playlist__container > div:nth-child(1) > div:nth-child(3) > button').click();

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

it('Can play playlist', () => {
    
  // Click the button
  cy.get('#root > div > div > div.app__window > div > div:nth-child(2) > button').click();
  
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

it('Can make a song play next', () => {
    
  // Click the button
  cy.get('#root > div > div > div.app__window > div > div.playlist__container > div:nth-child(1)  > div.playlistsong__options > button').click();
  cy.get('#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(1)').click();

  
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

it('Can add a song to queue', () => {
    
  // Click the button
  cy.get('#root > div > div > div.app__window > div > div.playlist__container > div:nth-child(1)  > div.playlistsong__options > button').click();
  cy.get('#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(2)').click();

  
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

it('Can remove a song', () => {

  let countBefore, countAfter;

  cy.get('#root > div > div > div.app__window > div > div.playlist__container').then($row => {
    countBefore = $row.find('.playlistsong').length; // count the number of elements in the row before an action
  });

  cy.get('#root > div > div > div.app__window > div > div.playlist__container > div:nth-child(1)  > div.playlistsong__options > button').click();
  cy.get('#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(3)').click();
  
  cy.get('.row').then($row => {
    countAfter = $row.find('.playlistsong').length; // count the number of elements in the row after the action
  });

  expect(countAfter).to.be.lessThan(countBefore); // assert that the count has decreased
})

  afterEach(() => {
    cy.logout()
  })


})