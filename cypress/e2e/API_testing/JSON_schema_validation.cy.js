// Install ajv library
// npm install ajv through command terminal

// Import the library
const Ajv = require('ajv')

//crete instance of ajv library
const avj = new Ajv()

describe("API schema validation", ()=>{

    it("Schema validation", ()=>{

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        })
        .then((response)=>{

            const schema = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "number"
                    },
                    "title": {
                      "type": "string"
                    },
                    "price": {
                      "type": "number"
                    },
                    "description": {
                      "type": "string"
                    },
                    "category": {
                      "type": "string"
                    },
                    "image": {
                      "type": "string"
                    },
                    "rating": {
                      "type": "object",
                      "properties": {
                        "rate": {
                          "type": "number"
                        },
                        "count": {
                          "type": "number"
                        }
                      },
                      "required": [
                        "rate",
                        "count"
                      ]
                    }
                  },
                  "required": [
                    "id",
                    "title",
                    "price",
                    "description",
                    "category",
                    "image",
                    "rating"
                  ]
                }
              } // schema end

              const validate = avj.compile(schema)
              // compare the validate with the response
              const isvalid = validate(response.body)
              // Checking if the response is equal to validate variable
              expect(isvalid).to.be.true;
        })

    })
})