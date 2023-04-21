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
    cy.get('#root > div > div > div.navbar > img').click()
    cy.url().should('include', 'admin')
  })

  it('Uploading Song without Name Throws Error', () => {
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(5) > div > div > input').type('https://www.testUrl.com/')
    cy.get('#root > div > div > div.app__window > div > div > form > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Please fill out this field.`)
    })
  })

  it('Uploading Song with Invalid Url Throws Error', () => {
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(2) > div > div > input').type('fire song name')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(4) > div > div > input').type('https://www.testUrl.com/')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(5) > div > div > input').type('anInvalidUrl')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(3) > div > div > select').select("Bob")
    cy.get('#root > div > div > div.app__window > div > div > form > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal("Invalid audio URL")
    }) 
   })

    it('Uploading Song with no song url or file throws error', () => {
      cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(2) > div > div > input').type('fire song name')
      cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(3) > div > div > select').select("Bob")
      cy.get('#root > div > div > div.app__window > div > div > form > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary').click()
      cy.on('window:alert', (str) => {
        expect(str).to.equal("Invalid audio URL")
      })    
    })

  it('Test that clicking the clear button removes all values', () => {
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(2) > div > div > input').type('fire song name')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(4) > div > div > input').type('https://www.testUrl.com/')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(5) > div > div > input').type('anInvalidUrl')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(3) > div > div > select').select("Bob")
    cy.contains('clear').click()
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(2) > div > div > input').type('')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(4) > div > div > input').type('')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(5) > div > div > input').type('')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(3) > div > div > select').select("")
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