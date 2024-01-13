// Install xml2js library for converting xml to json format
// npm install xml2js through command terminal

const xml2js = require('xml2js');
const parser = new xml2js.Parser({explicitArray: false}); 

describe("API XML parsing", ()=>{

    // storing the xml payload in variable that we will pass along with POST request
    const xmlPayload = "<Pet> 	<id>0</id> 	<Category> 		<id>0</id> 		<name>Cat</name> 	</Category> 	<name>pratik</name> 	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>0</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>"
    // we will get pet id after post request so to store it we will make a new variable
    let petid = null;

    it("creating POST request", ()=>{
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: xmlPayload,
            header:{
                'Content-Type': 'application/xml',
                'accept': 'application/xml'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            // here we also need to capture the id from the response
            // parser will convert the xml to json object
            parser.parseString(response.body,(err,result)=>{    // here the response will get stored in 'result'
                 petid = result.Pet.id;
            })
        })
    })
})