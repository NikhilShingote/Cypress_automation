// In this when we cick on a link a new window opens and we want to do something on a new page
// cypress cannot handle the functionality where it cannot focus on new window
// so we will remove the functionality of opening a new window on new tab from the webelement of that link
// in this way the new window will be openend on the same tab

describe('handle tab', ()=> {

    it('Approach 1',()=> {
        // parent tab
        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get(".example a").invoke('removeAttr','target').click()

        // redirected to the below link
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        // going back to parent tab
        cy.go('back')
    })

    it.only('Approach 2',()=> {
        // parent tab
        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get(".example a").then((e)=>{
            let url = e.prop('href')
            cy.visit(url)
        })

        // opening the above captured link
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        // going back to parent tab
        cy.go('back')
    })
})