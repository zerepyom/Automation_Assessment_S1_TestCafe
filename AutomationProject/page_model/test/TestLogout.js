import LoginPage from  '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constant'

fixture('Login feature testing: Test Scenario 3')
    .page `https://www.saucedemo.com/`;

/*  Test Scenario 3: Logout from product's page
    Using constants to provide invalid credentials  */
test ('Test Scenario 3: User logout from Products Page', async t => {
    await LoginPage.submitLoginform(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageContainer.exists).ok()
    await t.expect(ProductsPage.pageTitle.innerText).eql('Products')
    .click(ProductsPage.burgerButton)
    .click(ProductsPage.logoutButton)
    await t.expect(LoginPage.loginButton.exists).ok()
})

/* testcafe chrome page_model\test\TestLogout.js */ 
