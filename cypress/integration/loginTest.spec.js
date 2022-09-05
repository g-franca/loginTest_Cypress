import accountPage from "../page/accountPage"
import loginData from "../fixtures/login.json"


describe("Login Test", () => {
    beforeEach(() => {
        cy.session('todos', () => {
            cy.visit(Cypress.env("urlMain"));
        });
    });

    it('Verify Content', () => {
        cy.visit(Cypress.env("urlMain"));
        accountPage.userEntry("standard_user1@gmail.com", "secret_sauce");
        accountPage.textExist()
    });

    afterEach(() => {
        cy.logOut();
    });

    
});