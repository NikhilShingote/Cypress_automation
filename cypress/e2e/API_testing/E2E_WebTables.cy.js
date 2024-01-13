/// <reference types="Cypress" />

describe('Handle Tables', (()=>{
        
    beforeEach('Login', ()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")

        cy.get("#input-username").type('demo')
        cy.get("#input-password").type('demo')
        cy.get(".btn.btn-primary").click()
        cy.get(".btn-close").click()
        //go to customers main menu
        cy.get("#menu-customer>a").click()
        // go to sub menu
        cy.get("#menu-customer>ul>li:first-child").click()

    })
    
    it('Check Number Rows & Columns', ()=>{
        cy.get("table.table.table-bordered.table-hover>tbody>tr").should('have.length','10')
        cy.get("table.table.table-bordered.table-hover>thead>tr>td").should('have.length','7')

    })

    it('Check cell data from specific row & Column', ()=>{
        cy.get("table.table.table-bordered.table-hover>tbody>tr:nth-child(6)>td:nth-child(3)").contains("ghh56@gmail.com")
    })
    
    it('Read all the rows & Columns data in the first page', ()=>{
        //Capturing all the rows
        cy.get("table.table.table-bordered.table-hover>tbody>tr").each(($row,index,$rows)=>{

            cy.wrap($row).within(()=>{
                //capturing all the columns in that particular row
                cy.get('td').each(($col,index,$cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })

    it.only('Pagination', ()=>{
        /*
        let totalpages
        //first get total number of pages and by using then we wil extract the text and keep it into variable 'e'
        
        cy.get("div.col-sm-6.text-end").then((e)=>{
            let mytext = e.text()

            // now we need to get the index of the characters in text
            totalpages = mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
            cy.log("Total number of pages in a table: "+totalpages)
        })
        */
       let totalpages=5
       for (let p = 1; p <= totalpages ; p++)
       {
            if(totalpages>1)
            {
                cy.log("Active page is : "+p)
                cy.get("ul.pagination>li:nth-child("+p+")").click()
                cy.wait(2000)
                cy.get("table.table.table-bordered.table-hover>tbody>tr").each(($row,index,$rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get("td:nth-child(3)").then((e)=>{
                            cy.log(e.text())
                        })

                    })
                })
            }
       }
    })
        
}))
        
