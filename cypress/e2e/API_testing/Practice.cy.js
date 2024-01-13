describe('My Suite',()=>{

    it('MtTest1',()=>{

        cy.visit("https://shapeofdata.wordpress.com/2014/03/04/k-modes/")
        cy.title().should('eq',"K-modes | The Shape of Data")
    })
})