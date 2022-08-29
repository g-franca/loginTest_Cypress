class myAccountPage {

    elements = {
        titleSpan: ()=> cy.get('.page-heading')
    }

};

module.exports = new myAccountPage