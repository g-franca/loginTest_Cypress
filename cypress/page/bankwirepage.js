import bankwireData from "../fixtures/bankwirepay.json"
import "cypress-real-events/support"

class ObjectforTest {
    elements = {

        orderConfirmationBtn: () => cy.get(bankwireData.orderConfirmationBtn),

    };


    orderConfirmationBtn() {
        this.elements.orderConfirmationBtn().then(ocBtn =>{
            expect(ocBtn).to.exist
        }).click();
    };

};

module.exports = new ObjectforTest