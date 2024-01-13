
describe("Passing JSON response", ()=>{

    it("Passing simple json response",()=>{

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        })
        .then((response)=>{
            // For validating 1st id
            expect(response.status).equal(200);
            expect(response.body[0].id).equal(1);
            expect(response.body[0].title).equal('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
            expect(response.body[0].price).equal(109.95);
            expect(response.body[0].rating.rate).equal(3.9);
            // For validating 19th id
            expect(response.status).equal(200);
            expect(response.body[19].id).equal(20);
            expect(response.body[19].title).equal('DANVOUY Womens T Shirt Casual Cotton Short');
            expect(response.body[19].price).equal(12.99);
            expect(response.body[19].rating.rate).equal(3.6);
        })
    })

    it.only("Passing Complex json response",()=>{

        let totalprice = 0;

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs:{limit:5}             //Limit parameter displays only the limited records
                                              
        })
        .then((response)=>{
            // For validating 1st id
            expect(response.status).equal(200);
            //foreach captures every object and stores it into element, so element is an object here
            response.body.forEach(element =>{
                totalprice = totalprice + element.price
            });

            expect(totalprice).equal(899.23);   // for limit 5 objects
        })
    })
})