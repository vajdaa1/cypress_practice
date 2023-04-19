

describe("XPathLocators", () => {
  it("find no of products", () => {
    cy.visit("https://ecipele.hr/");
    cy.get(".base-button").contains("Pristanak").click({force:true});

    cy.get('.simple-slider').eq(1).find('li').should('have.length', 3)
//cy.get('.marketing-cards-slider-slide').should("have.lenght", 2);
    //cy.xpath("//ul[@class='data-v-32b3adfa']//li").should("have.lenght", 7);
  })
})
