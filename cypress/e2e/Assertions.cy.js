describe("Assertions demo", () => {
  it("Imlicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    //  cy.url().should('include','orangehrmlive.com')                                                 //Pr.URL: prvi način implicit assertions, primjer dužeg načina
    // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // cy.url().should('contain','orangehrm')

    //      cy.url().should('include','orangehrmlive.com')                                                      //drugi način, ali kraći način pisanja!
    //     .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     .should('contain','orangehrm')

    cy.url()
      .should("include", "orangehrmlive.com") //treći način, samo pisanje sa 'and key'
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrm")
      .and("not.contain", "greenhrm");

    cy.title()
      .should("include", "Orange") //2.Pr: title
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    cy.get(".orangehrm-login-branding > img")
      .should("be.visible") //3.Pr: provjerava visibility of element logo --check logo visible or not
      .and("exist"); //provjerava je li element postoji na stranici ili ne --check logo exist or not

    // cy.xpath("//a").should('have.lenght','5')//Pr4: check totaly how many number of links are presented - capture all the links -

    cy.get("input[placeholder='Username']").type("Admin"); //Pr4: provide a value in "inputbox"
    cy.get("input[placeholder='Username']").should("have.value", "Admin"); // this is a value check
  });

  it("Explicit assertions", () => {
    //Pr1: Primjer of Explicit assertions

    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    let expName = "Testing automation"; //variable-letter expected name is equal to xyz (here 'let' is a keyword)

    cy.get(".oxd-userdropdown-name").then((x) => {
      //java script function - Arrow function (whatever text I capture from this statement I will store that element in variable(x)). So, element .oxd-userdropdown-name will be captured in (x) variable
      let actName = x.text();

      //BDD Style
      expect(actName).to.equal(expName); // here we are comparing the actual name with the expected name.
      //expect(actName).to.not.equal(expName); //Pr. negative assertion

      //TDD Style
      assert.equal(actName, expName);
      //assert.not.equal(actName, expName);
    });
  });
});
