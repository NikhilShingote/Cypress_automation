// This assertions come from CHAI library
/* 1. Implicit assertions
    - assertions supported by cypress directly
    - should
    - and
    - eq,contain,include,exist,have.length,have.value etc

   2. Explicit assertions
    - We have to write assertions here
    - expect
    - assert
*/


describe('Assertions demo', () => {

    it('Implicit assertions', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //Assertions/validations
        // 1. Implicit Assertions
        /*
        cy.url().should('include','demo.orangehrm')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')
        */

        // Instead of writing the cy.url().should() again and again we can remove cy.url for remaining cases
        /*
        cy.url().should('include','demo.orangehrm')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')
        */

        // Another method we can use and instead of should
        cy.url().should('include','demo.orangehrm')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','xyz')

        //Verify the title
        cy.title().should('include','HRM')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        // Validate element of logo on page
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        // to check the text entered in a text box

        // provides value into input box
        cy.get("input[placeholder='Username']").type("Admin") 
        
        // assertion
        cy.get("input[placeholder='Username']").should('have.value','Admin')

    })

    it('Explicit assertions', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //logging into application
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123") 
        cy.get("button[type='submit']").click()

        // defining a variable
        let expname = "Paul Collings";
        // writing Javascript function
        cy.get("p[class='oxd-userdropdown-name']").then( (x) => {

            // here the element that is captured above is stored in x variable and passed as a parameter in the function
            let actualname = x.text()

            // Assertions in BDD approach
            expect(actualname).to.equal(expname)

            // Assertions in TDD approach
            assert.equal(actualname,expname)
        })
    })
})