/// <reference types="Cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed");
  });
  it("Validate product thumbnail", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);

    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
    var itemsTotal = 0
    cy.get('@itemPrice').then($linkText => {
        var itemPriceTotal = 0;
        var itemPrice = $linkText.split('$')
        var i
        for(i = 0; i < itemPrice.length; i++){
            cy.log(itemPrice[i])
            itemPriceTotal += Number(itemPrice[i])
        }
        cy.log("Non sale price items total: " + itemPriceTotal)
        itemsTotal += itemPriceTotal
    })
    cy.get('@saleItemPrice').then($linkText => {
        var saleItemPriceTotal = 0;
        var saleItemPrice = $linkText.split('$')
        var i
        for(i = 0; i < saleItemPrice.length; i++){
            cy.log(saleItemPrice[i])
            saleItemPriceTotal += Number(saleItemPrice[i])
        }
        cy.log("Sale price items total: " + saleItemPriceTotal)
        itemsTotal += saleItemPriceTotal
    })
    .then(() => {
        cy.log("The total price of all products: " + itemsTotal)
        expect(itemsTotal).to.equal(660.5)
    })
  });
});
