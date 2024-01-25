


describe('This is Suite name here',() => {

    it('My first test case', () => {

        cy.visit("https://www.google.com/")

        // Assertion
        cy.title().should('eq','Google')

    })

    it('My test case', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.title().should('eq','OrangeHRM')
    })

})