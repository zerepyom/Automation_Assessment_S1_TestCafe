import LoginPage from  '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constant'

fixture('Login feature testing: Test Scenario 1')
    .page `https://www.saucedemo.com/`;

/*  Test Scenario 0: Login with valid user
    Providing credentials directly   */
test ('Test Scenario 0: User can login using  valid credential ', async t => {
    await t
        .typeText(LoginPage.usernameField,'standard_user')
        .typeText(LoginPage.passwordField,'secret_sauce')
        .click(LoginPage.loginButton)
    await t.expect(ProductsPage.pageContainer.exists).ok()
    await t.expect(ProductsPage.pageTitle.innerText).eql('Products')
})


/*  Test Scenario 1: Login with valid user
    Using constants to provide valid credentials  */
test ('Test Scenario 1: User can login using valid credential', async t => {
    await LoginPage.submitLoginform(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageContainer.exists).ok()
    await t.expect(ProductsPage.pageTitle.innerText).eql('Products')
})

/*   testcafe chrome page_model\test\TestLogin.js  */ 