/// <reference types="Cypress" />

describe("Test File Upload via webdriveruni", () => {
    it("Upload a file...", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myFile').selectFile("cypress/fixtures/laptop.png")
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!')
            return true
        })
    })
    it("Upload No file...", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')
            return true
        })
    })
})