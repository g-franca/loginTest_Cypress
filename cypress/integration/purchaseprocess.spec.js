import loginPage from "../page/main"
import dressesPage from "../page/dressespage"
import shoppingPage from "../page/shoppingcart"
import addressPage from "../page/adresspage"
import shippingPage from "../page/shippingpage"
import paymentPage from "../page/paymentpage"
import bankwirePage from "../page/bankwirepage"
import orderCompletePage from "../page/ordercompletedpage"
import "cypress-real-events/support"



describe("Purchase Process",() => {
    beforeEach(() => {
        cy.session('todos', () => {
            cy.visit(Cypress.env("urlMain"));
            cy.logIn();
        });
    });

    it('Purchase Process', () => {
        cy.visit(Cypress.env("urlMain"));
        cy.log("Account Page");
        // To Casual Dresses Page
        dressesPage.enterCasualDressesPage();
        //To Casual Dresses to add to cart page
        dressesPage.addItemToCart();
        // Proceed to Check out
        dressesPage.CasualDressCheckOutbtn();
        //SHOPPING-CART SUMMARY Page
        cy.log('Summary Page');
        shoppingPage.shopCartCheckOutBtn();
        //ADDRESSES Page
        addressPage.adressCheckOutBtn();
        // SHIPPING Page
        shippingPage.shippingPage();
        //PAYMENT METHOD Page
        cy.log('Payment Method');   
        paymentPage.bankWirePayment();
        //Order Confirmation
        cy.log('Order Confirmation');
        bankwirePage.orderConfirmationBtn();
        //Order Completed
        cy.log('Order Completed');
        orderCompletePage.orderCompleted();
    });
});

