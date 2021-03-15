import { Selector } from 'testcafe'

class CheckOutOverviewPage {
    constructor () {
            this.pageTitle  = Selector('div.subheader')         
            this.finishButton  = Selector('a.btn_action.cart_button')
            this.totalItemsCart = Selector('span.fa-layers-counter.shopping_cart_badge')
            this.firstItemCart = Selector('a#item_4_title_link')
            this.secondItemCart = Selector('a#item_0_title_link')                       
            this.thirdItemCart = Selector('a#item_1_title_link')
    }
}
export default new CheckOutOverviewPage()