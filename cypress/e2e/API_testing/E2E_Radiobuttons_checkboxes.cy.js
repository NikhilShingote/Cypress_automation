// For getting suggestions while writing code
/// <reference types="Cypress" />

describe('chek UI elemewnts', ()=> {
    /*
    it('checking radio buttons', ()=> {

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        // selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
    }) */

    it('checking Check boxes', ()=> {

        cy.visit("https://testautomationpractice.blogspot.com/")

        // checking visibility of elements
        //cy.get("input#monday").should('be.visible')

        // selecting singl check box
        //cy.get("input#monday").check().should('be.checked')

        //unselecting check box
        //cy.get("input#monday").uncheck().should('not.be.checked')

        // selecting all the checkboxes
        //cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        //cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // selecting specific checkboxes
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
    })
})