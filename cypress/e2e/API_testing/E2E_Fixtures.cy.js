/// <reference types="Cypress" />

describe('Fixtures',()=>{

    // Direct Access
    /*
    it.only('Fixtures demo test', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // getting data from the fixture file and storing it ina variable 'data'
        cy.fixture('OrangeHRM.json').then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()

            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',data.expected)
        })

    })
    */

    // Access through Hook for multiple it blocks
    let userdata
    before(()=>{

        cy.fixture('OrangeHRM.json').then((data)=>{
            userdata = data
        })
    })
    
    it('Fixtures demo test', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // getting data from the fixture file and storing it ina variable 'data'
        cy.fixture('OrangeHRM.json').then((data)=>{
            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()

            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected)
        })
        
    })
})