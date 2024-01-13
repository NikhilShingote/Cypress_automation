

describe("API testing", ()=>{

    //Creating a variable for storing authentication token
    let authToken = null;

    // request for generating a token
    // here we are using before instaed of it because this is a pre-requisite for generating another POST and GET request
    before("Creating access token",()=>{

        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            // passing headers also here
            headers: {'Content-Type': 'application/json'},
            body: {
                clientName: 'Nikhil',
                clientEmail: Math.random().toString(5).substring(3)+"@gmail.com"
            }
        })
        //Capture the response token
        .then((response)=>{
            authToken = response.body.accessToken;

        });
    });

    // Creating a Order now
    before("Creating new order",()=>{

        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders',
            // passing headers also here
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+authToken                 // Since this is Bearer type of token so we need to use Bearer
                    },
            body: {
                "bookId": 1,
                "customerName": "pratik"
            }
        })
        //Capture the response token
        .then((response)=>{
            expect(response.status).equal(201);
            expect(response.body.created).equal(true);

        });
    });

    // fetch all the orders from the database
    it("Fetching the all orders",()=>{

        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+authToken
                },
            cookies: {
                'cookieName': 'mycookie'
                }
        })
        .then((response)=>{
            expect(response.status).equal(200);
            expect(response.body).has.length(1);
        })

    })

})