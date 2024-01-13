/// <reference types="Cypress" />

//Hooks- before,after,afterEach,beforeEach
//Tags - Only,Skip

describe('Hooksand tags', (()=>{
//hooks are used to perform certain actions before and after each test or group of tests.
//Hooks are useful when you want to execute any prerequisites
// tags are used to execute specific it blocks
    before(()=>{
        cy.log("**** Launching app *****")
    })

    after(()=>{
        cy.log("**** Closing app *****")

    })

    beforeEach(()=>{
        cy.log("**** Login *****")
    })

    afterEach(()=>{
        cy.log("**** Logout *****")
    })

    it('Search',()=>{

        cy.log("*** Searching ******")

    })

    it('Advance Search',()=>{

        cy.log("*** Advance Searching ******")
    })

    it('Listing Products',()=>{

        cy.log("*** Listing products ******")
        
    })
}))