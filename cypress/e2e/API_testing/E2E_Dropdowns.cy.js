/// <reference types="Cypress" />

describe('handle dropdowns', ()=> {

    // it.skip does not execute this block of code
    // drop down with select
    it.skip('dropdown withs elect', ()=> {

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')
        
    })
    // dropdown without select
    it.skip('dropdown without select', ()=> {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Iraq').type('{enter}')
        
        cy.get('#select2-billing_country-container').should('have.text','Iraq')
    })
    // Auto suggest dropdown
    it.skip('Auto suggest dropdown', ()=> {

        cy.visit("https://www.wikipedia.org/")

        cy.get('#searchInput').type('Delhi')
        
        cy.get('.suggestion-title').contains('Delhi Sultanate').click()
    })

    it('Dynamic dropdown', ()=> {

        cy.visit("https://www.google.com/")

        cy.get('#APjFqb').type('cypress automation')

        cy.wait(3000)

        //total number of suggestions
        cy.get('div.wM6W7d>span').should('have.length',12)
        
        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{

            if($el.text()=='cypress automation resume')
            {
                cy.wrap($el).click()
            }
        })

        cy.get('#APjFqb').should('have.value','cypress automation resume')
        
    })
})