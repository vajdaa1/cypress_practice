describe('CSSLocators', () => {

it("csslocators", () => {


    cy.visit("https://mystore.com/")

    cy.get(".simpleltkmodal-data").within(()=>{
        cy.contains("NO, THANK YOU").click({force:true});
    })

    cy.get("#ltkSDK").type("T-shirts")  //pass the value into the element
    cy.get("#search_mini_form").click()  //click action 
    cy.get(".item").contains("T-shirts")  // check wheter the t-shirt label is displayed or not (is value correct - verify some text in the element)

})


})