/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    before(function() {
        // cy.viewport(550, 750)
        cy.fixture("userDetails").as("user")
    })
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/")
        // cy.get('.info_links_footer > :nth-child(5) > a').click();
        // cy.xpath("//a[text()='Contact Us']").click();
        // cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get('a[href$="contact"]').click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text())
        });
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        // cy.get('#ContactUsFrm_first_name').type('Joe');
        // cy.get('#ContactUsFrm_email').type('joe_blogs123@gmail.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('Do you provide discount?');
        // cy.get('.col-md-6 > .btn').click();
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)')
        .should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
});