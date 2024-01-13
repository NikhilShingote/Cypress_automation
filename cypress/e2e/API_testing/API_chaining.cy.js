
describe("API chaining concept",()=>{

    it("Getting all the posts",()=>{
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
        .then((response)=>{
            expect(response.status).equal(200);
            const postid = response.body[0].id;
            return postid
        })
        .then((postid)=>{  // we will extract postId here which was returned earlier

            cy.request({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/comments?postId='+postid
            })
            .then((response)=>{
                expect(response.status).equal(200);
                expect(response.body).to.have.length(5);
            })
        })
    })
})