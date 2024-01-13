
describe("api testing", ()=>{

    it("Approach 1 - hard coded json object", ()=>{
        // naming constant variable as requestBody
        const requestBody={

                tourist_name: "Mike",                            //defining directly json object here
                tourist_email: "Nikail@gmail.com",                // The data we want to pass through POST request we write it this curly brackets
                tourist_location: "Paris"
            }
            
        // To send a post request we use:
        cy.request({
            method:'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody                                       // We have used the variable 'requestBody' created and passing it here
        })

        // Capturing the response we will get into 'response'.
        .then((response) =>{
            expect(response.status).to.eq(201)                  // Validate data here
            expect(response.body.tourist_name).to.eq("Mike")   
            expect(response.body.tourist_email).to.eq("Nikail@gmail.com")
            expect(response.body.tourist_location).to.eq("Paris")    
        })                
   })

   // it.only runs only this block while executing and other it blocks do not run
   it("Approach 2 - Dynamically creating json object", ()=>{
    // naming constant variable as requestBody
        const requestBody={

                tourist_name: Math.random().toString(5).substring(3),               //This will randomly create names of charater size 5 and 3
                tourist_email: Math.random().toString(5).substring(3)+"gmail.com",  // This will randomly create email ids
                tourist_location: "Paris"
            }
        // To send a post request we use:
        
        cy.request({
            method:'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody                                       // We have used the variable 'requestBody' created and passing it here
        })

        // Capturing the response we will get into 'response'.
        .then((response) =>{
            expect(response.status).to.eq(201)                  // Validate data here
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)   
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)    
        })                
    })

    // FIXTURE
    it.only("Approach 3 - Fixture", ()=>{
        // Fixture files are present on the left side panel where you can find fixtures folder.
        // Fixture block contains all the rquests in it as we cannot close fixture without getting the requests and responses
        // In Fixture instead of writing the body here we will get the data from fixture file
        // We include cy.request inside fixture block because fixture block does not complete without request and response.

        cy.fixture('tourist').then((fixturedata)=>{                  //We are storing fixture data into variable 'fixturedata'
            const requestBody=fixturedata;                            // Here again we are again storing it into request body variable 

            cy.request({
                method:'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestBody                                       // We have used the variable 'requestBody' created and passing it here
            })
    
            // Capturing the response we will get into 'response'.
            // We are validating data
            .then((response) =>{
                expect(response.status).to.eq(201)                  // Validate data here
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)   
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)  
                
                // We are validating property also now

                //Method - 1
                expect(response.body).has.property('tourist_email',requestBody.tourist_email)

                //Method - 2
                expect(response.body).to.have.property('tourist_email',requestBody.tourist_email)
            })
        })
                    
    })
})