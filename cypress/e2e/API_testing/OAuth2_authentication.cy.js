// 1. get Oauth2 access token
// 2. POST request - url - https://github.com/login/oauth/access_token
// 3. query params:
//              - client id
//              - client secret
//              - code
// 4. sennd GET request by using access token
// 5. GET - url - https://api.github.com/user/repos
//       auth: accesstoken

// Since the auth code code expires soon we need to create it again.
// use and pass clientid - https://github.com/login/oauth/authorize?client_id='pass client_id here'

describe("OAuth2",()=>{
    // Global variable so it  can be used in another request.
    let accessToken = "";

    it("Getting access token",()=>{

        cy.request({
            method:'POST',
            url: 'https://github.com/login/oauth/access_token',
            qs:{
                client_id: '62174d910c93e3a9afbf',
                client_secret: 'b7c4be092e45f94cd2e7df920d13cea8ac166821',
                code: '9f0858e783695b6c81c2'
            }
        })
        .then((response)=>{

            // since we need to capture token from the response but it is in text file so we need to write a logic.
            const params = response.body.split('&');
            accessToken = params[0].split('=')[1];

        })
    })
    
    it("Oauth2 request",()=>{

        cy.request({
            method:'GET',
            url: 'https://api.github.com/user/repos',
            headers:{
                Authorization: 'Bearer '+accessToken
            }
        })
        .then((response)=>{

            expect(response.status).to.eq(200);
            expect(response.body[1].id).to.equal(671168733)

        })
    })
})