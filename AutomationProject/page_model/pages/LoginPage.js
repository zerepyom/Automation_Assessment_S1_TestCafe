import { Selector, t } from 'testcafe'

class LoginPage {
    constructor () {
            this.usernameField = Selector('input[name="user-name"]')
            this.passwordField = Selector('input[name="password"]')
            this.loginButton  = Selector('input[id="login-button"]')
            this.errorButton = Selector('button.error-button')
            this.errorMessage = Selector('#login_button_container') 
    }
    async submitLoginform(username,password){
        await t.typeText(this.usernameField,username, {paste:true})
        await t.typeText(this.passwordField,password, {paste:true})
        await t.click(this.loginButton)
    }
}
export default new LoginPage()