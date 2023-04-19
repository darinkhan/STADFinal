describe('Testing Sign in page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Firebase error if form is submitted and no email is entered', () => {
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("invalid-email")
  })

  //NOT FAULT but better UX would be informing the user to enter a password instead of sending a FireBase error
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
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > p:nth-child(3) > button').click()
    cy.contains("Password Reset Email")
  })

  it('Reset password sends email', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > p:nth-child(3) > button').click()
    cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > center > input').type('fake@email.com')
    cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary").click()
    cy.contains("Email is sent")
  })

  it('Reset password indicates error if email is empty', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > p:nth-child(3) > button').click()
    cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary").click()
    cy.contains("Please Enter a valid Email")
  })


  it('Reset password sends email', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > p:nth-child(3) > button').click()
    cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > center > input').type('skyngthowhing@gmail.com')
    cy.get("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary").click()
    cy.contains("Email is sent")
  })

  //FAULT: Cannot fill out forgot password once email is sent. This is bad if they inputted wrong email.
  it('forgot password after filling out once works', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > p:nth-child(3) > button').click()
    cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogTitle-root > h2').click()
    cy.contains("Password Reset Email")
  })

  it('Sign up button navigates to sign up page', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > p:nth-child(4) > button').click()
    cy.contains("SIGN UP")
  })




})