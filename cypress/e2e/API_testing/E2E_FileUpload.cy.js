import 'cypress-file-upload'
// for uploading a file we have to first keep the file in fixtures folder
describe('File Uploads', (()=>{
   
    it('Single File Upload', ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('TREE-CART.pdf')
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get("div[class='example']>h3").should('have.text','File Uploaded!')
    })
    
    it('File Upload - Rename', ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'TREE-CART.pdf',fileName:'Myfile.pdf'})
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get("div[class='example']>h3").should('have.text','File Uploaded!')
    })

    it('File Upload - Drag and drop', ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('TREE-CART.pdf',{subjectType:'drag-n-drop'})
        cy.wait(3000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('TREE-CART.pdf')
    })
   
    it.only('Multiple files Upload',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get('#filesToUpload').attachFile(['TREE-CART.pdf', 'lead scoring summary report.pdf'])
        cy.wait(3000)
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
    })

    it('File upload Shadow Dom', ()=>{

    })
}))