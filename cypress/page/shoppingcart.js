import shoppingData from "../fixtures/shoppingcart.json"
import "cypress-real-events/support"
class ObjectforTest {
    elements = {

        shopCartCheckOutBtn: () => cy.get(shoppingData.shopCartCheckOutBtn),
  
    };

    shopCartCheckOutBtn() {
        this.elements.shopCartCheckOutBtn().click();
    };

};



module.exports = new ObjectforTest