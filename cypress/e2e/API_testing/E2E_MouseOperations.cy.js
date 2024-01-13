/// <reference types="Cypress" />

import 'cypress-iframe'

require ('@4tw/cypress-drag-drop')

describe('Mouse Operations', ()=>{

    it('Mouse Hover', ()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible')
    })

    it('Right click', ()=>{
        

    })

    it('Double click', ()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('#iframeResult')

        // approach 1 using trigger method
        //cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick')
        //cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')

        //approach 2 using dblclick() method
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick()
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')

    })

    it('Drag and drop using plugin', ()=>{
        cy.wait(2000)
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')
        cy.wait(2000)
        cy.get('#box6').drag('#box106',{force:true})
    })

    it.only('Scrolling page', ()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(2)').scrollIntoView()
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(2)').should('be.visible')

    })
})