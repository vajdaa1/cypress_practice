describe('csslocators1', () => {

    it("csslocators1", () => {
    
    
        cy.visit("https://ecipele.hr")
        cy.get(".base-button").contains("Pristanak").click({force:true});
  
       
    
        cy.get(".base-button").type("torbe")
            cy.get(".base-button").eq(4).click({force:true})
          

        cy.get(".header-search-container").within(()=>{
            cy.get(".base-button").eq(77).click({force:true});
        })
        //cy.get(".search-icon").eq(1).click({force:true})  //click action 
        cy.get(".query-text").contains("torbe")  
    })
    
    
    })