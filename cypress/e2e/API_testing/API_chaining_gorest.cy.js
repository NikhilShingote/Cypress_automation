
describe("API_chaining_Gorest",()=>{

    const authtoken = '47777795f6a70e3c2ba97bc54528a681981b7ae7371c207a50209db8dc3375f5'

    it("Create, Update, delete resource", ()=> {

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                name: 'John',
                gender: 'Male',
                email: Math.random().toString(3).substring(2)+'@gmail.com',
                status: 'active'
            },  
            headers: {
                Authorization: 'Bearer '+authtoken
            }
        })
        .then((response)=>{

            expect(response.status).equal(201);
            const userId = response.body.id

            // here itself we will update user name
            cy.request({
                method:'PUT',
                url: 'https://gorest.co.in/public/v2/users/'+userId,
                body: {
                    name: 'pratik'     // updating the name
                },
                headers: {
                    Authorization: 'Bearer '+authtoken
                }
            })
            //vlidating the updated name
            .then((response)=>{
                expect(response.status).equal(200);
                expect(response.body.name).equal('pratik');

                //deleting the resource
                cy.request({
                    method: 'DELETE',
                    url: 'https://gorest.co.in/public/v2/users/'+userId,
                    headers: {
                        Authorization: 'Bearer '+authtoken
                    }
                })
                .then((response)=>{
                    expect(response.status).equal(204);
                })
            })
            
        })
    })
})