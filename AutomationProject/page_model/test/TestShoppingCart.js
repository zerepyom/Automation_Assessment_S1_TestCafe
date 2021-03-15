import LoginPage from  '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constant'
import ShoppingCart from '../pages/ShoppingCart';

fixture('Login feature testing: Test Scenario 4')
    .page `https://www.saucedemo.com/`;

/*  Test Scenario 4: Navigate to the shopping cart
    Using constants to provide invalid credentials  */
test ('Test Scenario 4: User navigates to Shooping Cart', async t => {
    await LoginPage.submitLoginform(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageContainer.exists).ok()
    await t.expect(ProductsPage.pageTitle.innerText).eql('Products')
    .click(ProductsPage.shoppingButton)
    await t.expect(ShoppingCart.pageTitle.exists).ok()
    await t.expect(ShoppingCart.pageTitle.innerText).eql('Your Cart')
})

/* testcafe chrome page_model\test\TestShoppingCart.js */ 