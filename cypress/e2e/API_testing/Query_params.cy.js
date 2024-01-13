

describe("API testing", ()=>{
    it("passing Query parameters", ()=>{

        cy.request({
            method:'GET',
            url: 'https://reqres.in/api/users',
            qs: {page:2}                               // This particular Query parameter will be added to above url

        })
        .then((response)=>{
            // method - 1
            expect(response.status).to.eq(200);
            // method - 2
            expect(response.status).equal(200);
            
            expect(response.body.page).equal(2);
            // To find number of data
            expect(response.body.data).has.length(6)

            expect(response.body.data[0]).have.property('id',7);
            expect(response.body.data[0]).has.property('first_name','Michael');

        })

    })
})