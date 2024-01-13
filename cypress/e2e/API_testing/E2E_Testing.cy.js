


describe('This is Suite name here',() => {

    it('My first test case', () => {

        cy.visit("https://www.google.com/")

        // Assertion
        cy.title().should('eq','Google')

    })

})