import loginPage from "../fixtures/loginpage.json"

class User {
    elements = {
        emailUser: () => cy.get(loginPage.emailBar),
        passUser: () => cy.get(loginPage.passworBar),
        loginBtn: () => cy.get(loginPage.loginBtn),
        wrongEmail: () => cy.get(loginPage.wrongEmailMessage),
        myAccountHeading:()=> cy.get(loginPage.myAccountHeading)
        
        
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
        this.elements.myAccountHeading().should("contain.text", "My account");
    };
};




module.exports = new User