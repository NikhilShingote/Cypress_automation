/// <reference types="Cypress" />

describe('Alerts', ()=> {

    // 1. JS alert it will have some text and an OK button
    it('JS alerts', ()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("[onclick='jsAlert()']").click()

        // validating
        cy.on('window:alert',(t)=>{
            expect(t).to.contain('I am a JS Alert')
        })

        // alert window is automatically closed by cypress with OK button

        // validating
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })
    // 2. JS confirm
    // JS alert it will have some text and an 'OK' button and cancel button
    it('JS confirm alerts - clicking OK button', ()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("[onclick='jsConfirm()']").click()

        // validating
        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })

        // alert window is automatically closed by cypress with 'OK' button
        
        // validating
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    // to close the alert window with 'cancel' button we have to create another event
    it('JS confirm alerts - clicking cancel button', ()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("[onclick='jsConfirm()']").click()

        // validating
        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })

        // here cypress closes alert window using cancel window
        cy.on('window:confirm',()=>false)
        
        // validating
        cy.get('#result').should('have.text','You clicked: Cancel')

    })

    // 3. Java script prompt alert
    // It contains text box
    it('JS prompt alerts - clicking cancel button', ()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // here before opening the alert button we have to write an event to pas text
        // capturing the window in a variable and passing it into arrow function
        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome')

        })
        cy.get("[onclick='jsPrompt()']").click()

        // here cypress closes alert window using cancel window
        cy.on('window:prompt',()=>false)

        // validating
        cy.get('#result').should('have.text','You entered: welcome')

    })

    //Authenticated alert
    it.only('JS prompt alerts - clicking cancel button', ()=> {
        //Approch 1
        /*
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:"admin",password:"admin"}})

        // validating
        cy.get("div[class = 'example'] p").should('have.contain','Congratulations')
        */
       // Approach 2
       cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
       cy.get("div[class = 'example'] p").should('have.contain','Congratulations')
    })

})