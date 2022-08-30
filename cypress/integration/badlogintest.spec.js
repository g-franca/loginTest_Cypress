import loginPage from "../page/main"
import loginData from "../fixtures/login.json"

describe("Login Test", () => {
    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    });

    it('Successfully Login intent', () => {
        loginPage.userEntry(loginData.emailUser, loginData.passworBar);
    });

    it.only('Invalid Password', () => {
        loginPage.userEntry(loginData.wrongEmail, loginData.passworBar);
        loginPage.wrongUser()
    });
    
});