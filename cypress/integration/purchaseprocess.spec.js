import loginPage from "../page/main"
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
        loginPage.enterCasualDressesPage();
        //To Casual Dresses to add to cart page
        loginPage.addItemToCart();
        // Proceed to Check out
        loginPage.CasualDressCheckOutbtn();
        //SHOPPING-CART SUMMARY Page
        cy.log('Summary Page');
        loginPage.shopCartCheckOutBtn();
        //ADDRESSES Page
        loginPage.adressCheckOutBtn();
        // SHIPPING Page
        loginPage.shippingPage();
        //PAYMENT METHOD Page
        cy.log('Payment Method');
        loginPage.bankWirePayment();
        //Order Confirmation
        cy.log('Order Confirmation');
        loginPage.orderConfirmationBtn();
        //Order Completed
        cy.log('Order Completed');
        loginPage.orderCompleted();
    });
});

