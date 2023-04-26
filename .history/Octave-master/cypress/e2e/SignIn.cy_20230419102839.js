describe('Testing Sign in page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Firebase error if form is submitted and no email is entered', () => {
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("invalid-email")
  })

  it('Firebase error if no password is entered for email', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type('fake@email.com')
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("Firebase: Error")
  })

  it('Auth error if new user tries to sign in without creating an account', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type('fake@email.com')
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(2) > input').type('password')
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("Firebase: Error")
    cy.contains("user-not-found")
  })

  it('Forgot password creates pop up', () => {
    cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogTitle-root > h2').click()
    cy.contains("Reset Password")
  })

  it('Reset password sends email', () => {
    cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > center > input').type('skyngthowhing@gmail.com')
    cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary").click()
  })

  it('Sign up button navigates to sign up page', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > h5').click()
    cy.contains("Sign up")
  })




})