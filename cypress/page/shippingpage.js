import shippingPageData from "../fixtures/shippingpage.json"
import "cypress-real-events/support"
class ObjectforTest {
    elements = {

        shipTermsCheck: () => cy.get(shippingPageData.shipTermsCheck),
        shipCheckOutBtn: () => cy.get(shippingPageData.shipCheckOutBtn),
        
    };

    shippingPage() {
        this.elements.shipTermsCheck().click().wait(2000);
        this.elements.shipCheckOutBtn().click();
    };

};



module.exports = new ObjectforTest