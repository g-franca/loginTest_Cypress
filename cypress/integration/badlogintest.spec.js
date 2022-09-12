import firstBasicTest from "../page/firstbasictest"
import loginPage from "../fixtures/loginpage.json"

describe("Login Test", () => {
    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    });

    it('Successfully Login intent', () => {
        firstBasicTest.userEntry(loginPage.emailUser, loginPage.passwordUser);
    });

    it.only('Invalid Password', () => {
        firstBasicTest.userEntry(loginPage.wrongEmail, loginPage.passwordUser);
        firstBasicTest.wrongUser()
    });
    
});