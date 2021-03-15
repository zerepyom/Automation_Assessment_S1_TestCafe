import { Selector, t } from 'testcafe'

class CheckOutPage {
    constructor () {
            this.pageTitle  = Selector('div.subheader')         
            this.continueButton  = Selector('input.btn_primary.cart_button')
            this.errorButton = Selector('button.error-button')
            this.errorMessage = Selector ('div.checkout_info_wrapper')
            this.firstname = Selector ('input[id="first-name"]')
            this.lastname  = Selector ('input[id="last-name"]')
            this.zipcode   = Selector ('input[id="postal-code"]')
    }    
    async submitInformation(firstn,lastn,zipc){
        await t.typeText(this.firstname,firstn, {paste:true})
        await t.typeText(this.lastname,lastn, {paste:true})
        await t.typeText(this.zipcode,zipc, {paste:true})
        await t.click(this.continueButton)
    }
}
export default new CheckOutPage()

