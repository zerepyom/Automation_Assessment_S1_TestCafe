import { Selector } from 'testcafe'

class ProductsPage {
    constructor () {
        this.pageContainer = Selector ('#inventory_container')
        this.pageTitle = Selector ('div.product_label')
        this.burgerButton = Selector ('#react-burger-menu-btn')
        this.logoutButton = Selector ('#logout_sidebar_link')
        this.shoppingButton = Selector ('#shopping_cart_container.shopping_cart_container')
        this.singleItemCart = Selector('a#item_4_title_link')
        this.firstButtonAdd = Selector('button.btn_primary.btn_inventory')
        this.firstButtonRemove = Selector('button.btn_secondary.btn_inventory')
        this.secondItemCart = Selector('a#item_0_title_link')
        this.secondButtonAdd = Selector('button.btn_primary.btn_inventory')
        this.secondButtonRemove = Selector('button.btn_secondary.btn_inventory')
        this.thirdItemCart = Selector('a#item_1_title_link')
        this.thirdButtonAdd = Selector('button.btn_primary.btn_inventory')
        this.thirdButtonRemove = Selector('button.btn_secondary.btn_inventory')
    }
}
export default new ProductsPage()