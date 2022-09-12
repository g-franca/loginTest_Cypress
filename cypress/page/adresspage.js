import addressPageData from "../fixtures/adresspage.json"
import "cypress-real-events/support"
class ObjectforTest {
    elements = {

        adressCheckOutBtn: () => cy.get(addressPageData.adressCheckOutBtn),
        
    };


    adressCheckOutBtn() {
        this.elements.adressCheckOutBtn().click();
    };

};



module.exports = new ObjectforTest