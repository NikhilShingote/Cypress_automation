
// Desricbe is similar to testsuite which contains it block
// for every request we need to write a it block
describe("Http requests", ()=>{

    // This is the GET request code
    it("GET call", ()=>{

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')   // We have to pass 2 parameters(request_type, URL) for get request
        .its('status')
        .should('equal', 200);
    })


    // This is POST request code
    it("Post call", ()=>{

        cy.request({                                           // We have to pass 3 parameters(request_type, URL, body) for post request
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: {
                title: "Test post",
                body: "This is POST call",          // body is in json format so curly braces
                userId: 1
                }
                    
        })
        .its('status')
        .should('equal',201);


    })

    // This is PUT request code
    it("PUT call", ()=>{

        cy.request({
            method:'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: "Test post - Updated",
                body: "This is PUT call",          // body is in json format so curly braces
                userId: 1,
                id: 1
            }    
        })
        .its('status')
        .should('equal', 200);

    })

    it("DELETE call", ()=>{

        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        })
        .its('status')
        .should('equal', 200);
    })


})