/// <reference types="Cypress" />

describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/")
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("Calculate and assert the total age of all users - V1", () => {
        var userDetails = []
        let numb = 0
        cy.get('#thumbnail-1 td').each(($el, index) => {
            userDetails[index] = $el.text()
        }).then(() => {
            var i
            for(i = 0; i < userDetails.length; i++){
                if(Number(userDetails[i])){
                    numb += Number(userDetails[i])
                }
            }
            cy.log("Found total age: " + numb)
            expect(numb).to.equal(322)
        })
    })
    it("Calculate and assert total age of all users - V2", () => {
        let ages = [];
        cy.get("#thumbnail-1 td").each(($el, i) => {
            ages[i] = $el.text();
          }).then(() => {
            const filteredAge = ages.filter(Number).map(Number);
            const ageSum = filteredAge.reduce((acc, cur) => acc + cur, 0); 
            cy.log(`Found total age: ${ageSum}`); 
            expect(ageSum).to.eq(322);
            });
      });
      it("Calculate total age of all users - V3", () => {
        let total = 0;
        cy.get("table tr")
            .not(":has(th)")
            .each($tr => {
                total += +$tr.find("td").last().text();
            })
            .then(() => {
                expect(total).to.equal(322);
            });
    })
    it('Calculate and assert the total age of all users - V4', () => {
        let userDetails = [];
        let totalAge = 0;
        cy.get('#thumbnail-1 td').each(($el) => {
            userDetails.push($el.text());
        }).then(() => {
            for (let data of userDetails) {
                if (Number(data)) {
                    totalAge += Number(data);
                }
            }
            expect(totalAge).to.equal(322);
        })
    });

    it("Calculate and assert the age of given user based on last name - V1", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index) => {
            const text = $el.text()
            if(text.includes('Woods')){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                    const userAge = age.text()
                    expect(userAge).to.equal("80")
                })
            }
        })
    })
})