import { before } from "mocha"

describe('Testing home page', () => {

  before(() => {
    cy.login()
    
  })

  beforeEach(() => {

    cy.visit('http://localhost:3000/')
  
  })
})