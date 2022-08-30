import loginPage from "../page/main"
import accountPage from "../page/accountPage"


describe("Login Test", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("urlMain"));
    });

    it('First Login intent', () => {
        loginPage.userEntry("standard_user1@gmail.com", "secret_sauce");
    });

    it('Verify Content', () => {
        loginPage.userEntry("standard_user1@gmail.com", "secret_sauce");
        loginPage.textExist()
        
    });

    afterEach(() => {
        cy.logOut();
    });

    
});