import LoginPage from  '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constant'

fixture('Login feature testing: Test Scenario 2')
    .page `https://www.saucedemo.com/`;

/*  Test Scenario 2: Login with an invalid user
    Using constants to provide invalid credentials  */
test ('Test Scenario 2: User cant login using  invalid credential', async t => {
    await LoginPage.submitLoginform(CREDENTIALS.INVALID_USER.USERNAME,CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.errorButton.exists).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})

/*   testcafe chrome page_model\test\TestLoginInvalid.js  */  