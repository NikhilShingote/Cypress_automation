describe('My Test Suite',()=>{

    it('My test case',()=>{

        cy.visit("https://www.saucedemo.com/")
        cy.get("#user-name").type("Nikhil")
        cy.get("#password").type("Nikhil")
        cy.get("#login-button").click()
    })
})