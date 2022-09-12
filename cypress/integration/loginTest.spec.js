import firstbasictest from "../page/firstbasictest"
import loginData from "../fixtures/login.json"


describe("Login Test", () => {
    beforeEach(() => {
        cy.session('todos', () => {
            cy.visit(Cypress.env("urlMain"));
        });
    });

    it('Verify Content', () => {
        cy.visit(Cypress.env("urlMain"));
        firstbasictest.userEntry("standard_user1@gmail.com", "secret_sauce");
        firstbasictest.textExist()
    });

    afterEach(() => {
        cy.logOut();
    });

    
});