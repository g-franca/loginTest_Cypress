import paymentPageData from "../fixtures/paymentpage.json"
import "cypress-real-events/support"

class ObjectforTest {

    elements = {

        bankWirePayment: () => cy.get(paymentPageData.bankWirePayment)
        
    };

    bankWirePayment() {
        this.elements.bankWirePayment().click();
    };

};



module.exports = new ObjectforTest