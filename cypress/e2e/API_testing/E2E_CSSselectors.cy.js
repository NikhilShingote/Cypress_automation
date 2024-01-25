describe('CSSselectors',()=>{

    it('Test Locators', ()=>{

        cy.visit('https://automationexercise.com/products')

        cy.get('#search_product').type('Tshirt')

        cy.get("[class$='btn btn-default btn-lg']").click()

    })


})