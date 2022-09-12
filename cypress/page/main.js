import loginData from "../fixtures/login.json"
import "cypress-real-events/support"
class Buyer {
    elements = {
        dressesBtn: () => cy.get(loginData.dressesBtn),
        casualDressBtn: () => cy.get(loginData.casualDressBtn,{timeout: 10000}),
        printedDress: () => cy.get(loginData.casualDressBtn),
        addToCartBtn: () => cy.get(loginData.addToCartBtn),
        CasualDressCheckOutbtn: () => cy.get(loginData.CasualDressCheckOutbtn, {timeout: 10000}),
        shopCartCheckOutBtn: () => cy.get(loginData.shopCartCheckOutBtn),
        adressCheckOutBtn: () => cy.get(loginData.adressCheckOutBtn),
        shipTermsCheck: () => cy.get(loginData.shipTermsCheck),
        shipCheckOutBtn: () => cy.get(loginData.shipCheckOutBtn),
        bankWirePayment: () => cy.get(loginData.bankWirePayment),
        orderConfirmationBtn: () => cy.get(loginData.orderConfirmationBtn),
        returnToMenuBtn: () => cy.get(loginData.returnToMenuBtn),
        textConfirmation:()=> cy.get(loginData.textConfirmation)
        
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

    shopCartCheckOutBtn() {
        this.elements.shopCartCheckOutBtn().click();
    };

    adressCheckOutBtn() {
        this.elements.adressCheckOutBtn().click();
    };

    shippingPage() {
        this.elements.shipTermsCheck().click().wait(2000);
        this.elements.shipCheckOutBtn().click();
    };
    bankWirePayment() {
        this.elements.bankWirePayment().click();
    };

    orderConfirmationBtn() {
        this.elements.orderConfirmationBtn().then(ocBtn =>{
            expect(ocBtn).to.exist
        }).click();
    };

    orderCompleted() {
        this.elements.textConfirmation().should('have.text', 'Your order on My Store is complete.')
            .and('have.css', 'color', 'rgb(51, 51, 51)');
        this.elements.returnToMenuBtn().click();
    }
};



module.exports = new Buyer

