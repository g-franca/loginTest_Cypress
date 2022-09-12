import dressesData from "../fixtures/dressespage.json"
import "cypress-real-events/support"

class ObjectforTest {
    elements = {

        dressesBtn: () => cy.get(dressesData.dressesBtn),
        casualDressBtn: () => cy.get(dressesData.casualDressBtn),
        printedDress: ()=> cy.get(dressesData.printedDress),
        addToCartBtn: ()=> cy.get(dressesData.addToCartBtn),
        CasualDressCheckOutbtn: ()=> cy.get(dressesData.CasualDressCheckOutbtn,{timeout: 10000})

    };

    enterCasualDressesPage() {
        this.elements.dressesBtn().realHover().wait(2000);
        this.elements.casualDressBtn().should('exist').click();
    };
    
    addItemToCart() {
        this.elements.printedDress().realHover().wait(4000);
        this.elements.addToCartBtn().click();
    };

    CasualDressCheckOutbtn() {
        this.elements.CasualDressCheckOutbtn().should('be.visible').click();
    };

};

module.exports = new ObjectforTest