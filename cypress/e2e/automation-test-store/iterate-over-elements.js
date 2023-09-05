/// <reference types="Cypress" />

describe("Iterate over elements", () => {
  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Log information of all hair care products", () => {
    cy.get(".fixed_wrapper .prdocutname").each( ($el, index) => {
        cy.log("Index " + index + " : " + $el.text())
    });
  });
  it("Add specific product to basket", () => {
    // cy.get(".fixed_wrapper .prdocutname").each(($el) => {
    //     if($el.text().includes("Curls")){
    //         cy.wrap($el).click()
    //     }
    // });
    cy.selectProduct("Curls")
  });
  it("Add another specific product to basket", () => {
    cy.selectProduct("Seaweed")
  });
  it("Add another specific product to basket 2", () => {
    cy.selectProduct("Eau Parfumee")
  });
});
