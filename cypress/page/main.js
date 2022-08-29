import loginData from "../fixtures/login.json"

class User {
    elements = {
        emailUser: () => cy.get(loginData.emailBar),
        passUser: () => cy.get(loginData.passworBar),
        loginBtn: () => cy.get(loginData.loginBtn),
        accountPage: ()=> cy.visit("http://automationpractice.com/index.php?controller=my-account")
        
    };

    userEntry(user, password) {
        this.elements.emailUser().type(user),
        this.elements.passUser().type(password),
        this.elements.loginBtn().click();    
    }

};

module.exports = new User

