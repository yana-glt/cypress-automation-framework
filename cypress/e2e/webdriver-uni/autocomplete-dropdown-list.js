/// <reference types="Cypress" />

describe("Verify Autocomplete dropdown lists via webdriveruni", () => {
    it("Select specific products via autocomplete dropdown lists", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el) => {
            const prod = $el.text()
            const productToSelect = "Avacado"
            if (prod === productToSelect) {
                // cy.wrap($el).click()
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        }).then(() => {
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > *').each(($el) => {
                const prod = $el.text()
                const productToSelect = "Grapes"
                if (prod === productToSelect) {
                    // cy.wrap($el).click()
                    $el.trigger('click')
                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)
                }
            })
        })
    })
})