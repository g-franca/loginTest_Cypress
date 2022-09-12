import loginData from "../fixtures/loginpage.json"

Cypress.Commands.add("logIn", () => {
    cy.get(loginData.emailBar).type(loginData.emailUser);
    cy.get(loginData.passworBar).type(loginData.passwordUser);
    cy.get(loginData.loginBtn).click();
});

Cypress.Commands.add("logOut", () => {
    cy.get(loginData.logOutbtn).click();
});

