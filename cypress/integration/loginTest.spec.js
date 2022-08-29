import loginPage from "../page/main"
import accountPage from "../page/accountPage"

describe("Login Test", () => {
    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    });

    it('First Login intent', () => {
        loginPage.userEntry("standard_user1@gmail.com", "secret_sauce");
    });

    it('Verify Content', () => {
        loginPage.userEntry("standard_user1@gmail.com", "secret_sauce");
        
        accountPage.elements.titleSpan().should("contain.text", "My account");
        
    });

    afterEach(() => {
        cy.logOut();
    });
    
});