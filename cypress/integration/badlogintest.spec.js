import accountPage from "../page/accountPage"
import loginData from "../fixtures/login.json"

describe("Login Test", () => {
    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    });

    it('Successfully Login intent', () => {
        accountPage.userEntry(loginData.emailUser, loginData.passwordUser);
    });

    it.only('Invalid Password', () => {
        accountPage.userEntry(loginData.wrongEmail, loginData.passwordUser);
        accountPage.wrongUser()
    });
    
});