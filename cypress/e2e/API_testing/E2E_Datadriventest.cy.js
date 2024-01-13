/// <reference types="Cypress" />

describe('My_Test_Suite',()=>{

    it('Data_driven_test', ()=>{

        // getting data from the fixture file and storing it ina variable 'data'
        cy.fixture('orangehrm2.json').then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach((userdata) => {
                cy.wait(3000)
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()

                // with valid login credentials
                if(userdata.username=='Admin' && userdata.password=='admin123')
                {
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected)
                    // this below steps are for logout action
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(" :nth-child(4) a.oxd-userdropdown-link").click()
                }
                // with invalid login credentials
                else
                {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',userdata.expected)
                }
                
            })
            
        })

    })

})