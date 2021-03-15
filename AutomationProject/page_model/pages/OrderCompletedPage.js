import { Selector } from 'testcafe'

class OrderCompletedPage {
    constructor () {
            this.pageTitle  = Selector('div.subheader')         
            this.orderThanks = Selector('h2.complete-header')
    }
}
export default new OrderCompletedPage()