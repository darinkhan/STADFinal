describe('Testing Search Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.login()
    cy.get('#root > div > div > div.navbar > div.navbar__center > a:nth-child(3) > span.navbar__linkSpan').click()
  })

  //Test with no/null input
  it('Testing Search with No Input', () => {
    cy.get('#root > div > div > div.app__window > div > div.search__bar > form > div > div > input').type()

  })


  //Test with nonexistent values
  it('Testing Search with Value that Does not Exist', () => {
    cy.get('#root > div > div > div.app__window > div > div.search__bar > form > div > div > input').type("Song123")
    cy.get('#root > div > div > div.app__window > div > div.search__bar > form > div > div > div > button').click()
    cy.contains("Search Result for Song123")
    cy.contains("No Results")
  })

  //Test with songs that exist
  it('Testing Search with Value that Does not Exist', () => {
    cy.get('#root > div > div > div.app__window > div > div.search__bar > form > div > div > input').type("Yum")
    cy.get('#root > div > div > div.app__window > div > div.search__bar > form > div > div > div > button').click()
    cy.contains("Search Result for Yum")
    cy.contains("Songs")
    cy.contains("Justin Bieber")
    cy.contains("playlistsong")
  })

  //Test with artists that exist
  it('Testing Search with Value that Does not Exist', () => {
    cy.get('#root > div > div > div.app__window > div > div.search__bar > form > div > div > input').type("Bo")
    cy.get('#root > div > div > div.app__window > div > div.search__bar > form > div > div > div > button').click()
    cy.contains("Search Result for Bo")
    cy.contains("Artists")
    cy.contains("Bob")
    cy.contains("artist")
  })

  //Test that second search clears items from first search
  it('Testing com', () => {
    cy.get('#root > div > div > div.app__window > div > div.search__bar > form > div > div > input').type("Baby")
    cy.get('#root > div > div > div.app__window > div > div.search__bar > form > div > div > div > button').click()
    cy.get('#root > div > div > div.app__window > div > div.search__bar > form > div > div > input').clear()

    cy.get('#root > div > div > div.app__window > div > div.search__bar > form > div > div > input').type("Shadow Rapper")
    cy.get('#root > div > div > div.app__window > div > div.search__bar > form > div > div > div > button').click()

    cy.get("playlistsong").should('not.exist');
    cy.get("Baby").should('not.exist');

    cy.contains("Artists")
    cy.contains("Shadow Rapper")
  })
})