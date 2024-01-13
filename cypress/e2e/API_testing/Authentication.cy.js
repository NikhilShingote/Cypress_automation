
describe("Authentication", ()=>{

    it("Basic Authentication",()=>{

        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                user: 'postman',
                pass: 'password'
            }
        })
        .then((response)=>{
            expect(response.status).equal(200);
            expect(response.body.authenticated).equal(true);
        })
    })
    it("Digest Authentication",()=>{

        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                username: 'postman',
                password: 'password',
                method: 'digest'
            }
        })
        .then((response)=>{
            expect(response.status).equal(200);
            expect(response.body.authenticated).equal(true);
        })
    })

    const token = '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'
    it("bearer token Authentication",()=>{

        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer '+token
            }
        })
        .then((response)=>{
            expect(response.status).equal(200);
        })
    })

    it("API key Authentication",()=>{

        cy.request({
            method: 'GET',
            url: 'api.openweathermap.org/data/2.5/forecast/daily?q=Delhi',
            qs: {
                appid: 'fe9c5cddb7e01d747b4611c3fc9eaf2c'   // API key and value
            }
        })
        .then((response)=>{
            expect(response.status).equal(200);
        })
    })
})