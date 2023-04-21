describe('Testing Admin Page', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.login()
    cy.get('#root > div > div > div.navbar > img').dblclick()
  })

  // ––––––––––––––––––––––––––––––––––––––––
  // ––––––––––– TESTING ADD SONG –––––––––––
  // ––––––––––––––––––––––––––––––––––––––––

  //Checks that clicking on the logo navigates to the admin page
  it('Can view admin page', () => {
    cy.url().should('include', 'admin')
    cy.contains("Add New Song")
  })

  //Checks that we stay on the admin page after clicking the logo again
  it('Can navigate to main admin page from admin', () => {
    cy.contains("Add Artist").click()
    cy.get('#root > div > div > div.navbar > div.navbar__logo').click()
    cy.url().should('include', 'admin')
  })

  it('Uploading Song without Name Throws Error', () => {
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(3) > div > input').type('https://www.testUrl.com/')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form').submit()
    cy.contains('error')
  })

  //FAILS: No url validation within app.
  it('Uploading Song with Invalid Url Throws Error', () => {
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(3) > div > input').type('anInvalidUrl')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form').submit()
    cy.contains('invalid url')    
  })

    it('Uploading Song with no song url or file throws error', () => {
      cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(1) > div > input').type('NoSongLinked')
      cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(3) > div > input').type('https://www.testUrl.com/')
      cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form').submit()
      cy.contains('Either song URL should be provided or song should be uploaded')    
    })

  it('Test that clicking the clear button removes all values', () => {
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(1) > div > input').type('SingSong1')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(2) > div > input').type('Bob')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(3) > div > input').type('https://www.testUrl.com/')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(4) > div > input').type('https://www.testUrl.com/')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form').submit()
    cy.contains('clear').click()

    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(1) > div > input').contains('')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(2) > div > input').contains('')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(3) > div > input').contains('')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(4) > div > input').contains('')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(5) > div > input').contains('')
  })

  // ––––––––––––––––––––––––––––––––––––––––
  // –––––––––– TESTING ADD ARTIST ––––––––––
  // ––––––––––––––––––––––––––––––––––––––––

  it('Testing Add Artist button navigates to adding artist to DB', () => {
    cy.contains("Add Artist").click()
    cy.contains('Add Artist to DB')
  })

  it('Test adding artist without name throws error', () => {
    cy.contains("Add Artist").click()
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(2) > div > input').type('SomeDescription')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form').submit()
    cy.contains('error')
  })

  it('Test adding artist without description throws error', () => {
    cy.contains("Add Artist").click()
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(1) > div > input').type('Artist1')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form').submit()
    cy.contains('error')
  })

  it('Test that not having an image url and not adding file causes error', () => {
    cy.contains("Add Artist").click()
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(1) > div > input').type('Artist1')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form > div:nth-child(2) > div > input').type('SomeDescription')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form').submit()

    cy.contains('Either image URL should be provided or Image should be uploaded')
  })


  // it('Test that adding artist with image url works', () => {
  // TODO: Check upload
  // })


  afterEach(() => {
    cy.logout()
  })
})