import orderCompletePageData from "../fixtures/ordercompletedpage.json"
import "cypress-real-events/support"

class ObjectforTest {
    elements = {

        textConfirmation:()=> cy.get(orderCompletePageData.textConfirmation),
        returnToMenuBtn: () => cy.get(orderCompletePageData.returnToMenuBtn)
        
    };



    orderCompleted() {
        this.elements.textConfirmation().should('have.text', 'Your order on My Store is complete.')
            .and('have.css', 'color', 'rgb(51, 51, 51)');
        this.elements.returnToMenuBtn().click();
    }
};

module.exports = new ObjectforTest