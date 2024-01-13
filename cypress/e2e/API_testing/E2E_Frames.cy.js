/// <reference types="Cypress" />

//import iframe module
import 'cypress-iframe'

describe('handle frames', ()=> {

    it('Approach 1',()=> {
        cy.visit("https://the-internet.herokuapp.com/iframe")

        //specify the id of the iframe
        // its() is used to access document in html
        const iframe = cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap)

        iframe.clear().type('Welcome buddy {ctrl+a}')

        cy.get("button[aria-label='Bold']").click()
    })

    it('Approach 2 - by using custom command',()=> {
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIframe('#mce_0_ifr').wait(2000).clear().type('Welcome buddy {ctrl+a}')

        cy.get("button[aria-label='Bold']").click()

    })

    it.only('Approach 3 - cypress iframe plugin',()=> {
        // parent tab
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded('#mce_0_ifr')

        cy.iframe('#mce_0_ifr').wait(2000).clear().type('Welcome buddy {ctrl+a}')

        cy.get("button[aria-label='Bold']").click()

    })
})