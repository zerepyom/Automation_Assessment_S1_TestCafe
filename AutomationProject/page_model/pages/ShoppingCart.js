import { Selector } from 'testcafe'

class ShoppingCart {
    constructor () {
        this.pageTitle = Selector ('div.subheader')
        this.checkoutButton = Selector ('a.btn_action.checkout_button')
        this.checkoutLabel = Selector('#btn_action')
        this.totalItemsCart = Selector('span.fa-layers-counter.shopping_cart_badge')
        this.firstButtonAdd = Selector('button.btn_primary.btn_inventory')
        this.firstButtonRemove = Selector('button.btn_secondary.cart_button')
        this.firstItemQty = Selector('div.cart_quantity')
        this.firstItemCart  = Selector ('a#item_4_title_link')
        this.secondItemCart = Selector ('a#item_0_title_link')                       
        this.thirdItemCart  = Selector ('a#item_1_title_link')
    }
}
export default new ShoppingCart()