import loginData from "../fixtures/login.json"
import accountPage from "../page/accountPage";

class User {
    elements = {
        emailUser: () => cy.get(loginData.emailBar),
        passUser: () => cy.get(loginData.passworBar),
        loginBtn: () => cy.get(loginData.loginBtn),
        wrongEmail: ()=> cy.get(loginData.wrongEmailMessage)
        
    };

    userEntry(user, password) {
        this.elements.emailUser().type(user),
        this.elements.passUser().type(password),
        this.elements.loginBtn().click();    
    }

    wrongUser() {
        this.elements.wrongEmail().should("exist")
    };

    textExist() {
        accountPage.elements.titleSpan().should("contain.text", "My account");
    };

};

module.exports = new User

