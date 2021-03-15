import LoginPage from  '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constant'
import ShoppingCart from '../pages/ShoppingCart';

fixture('Login feature testing: Test Scenario 5')
    .page `https://www.saucedemo.com/`;

/*  Test Scenario 5: Add a single item to shopping cart
    User  select the first element on the Products page, once added the buton change from ADD to REMOVE
    On the Shopping Cart page its verified 1 item added to the cart and check the product name added. */
test ('Test Scenario 5: User add a single item to the Shooping Cart', async t => {
    await LoginPage.submitLoginform(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageContainer.exists).ok()
    await t.expect(ProductsPage.pageTitle.innerText).eql('Products')
    /* Adding First Item to the Cart*/ 
    await t.expect(ProductsPage.singleItemCart.exists).ok()
    await t.expect(ProductsPage.singleItemCart.innerText).eql('Sauce Labs Backpack')
    .click(ProductsPage.firstButtonAdd)
    await t.expect(ProductsPage.firstButtonRemove.innerText).eql('REMOVE')

    .click(ProductsPage.shoppingButton)
    await t.expect(ShoppingCart.pageTitle.exists).ok()
    await t.expect(ShoppingCart.pageTitle.innerText).eql('Your Cart')
    /* Verify the product selected in the Cart*/ 
    await t.expect(ShoppingCart.totalItemsCart.innerText).eql('1')
    await t.expect(ShoppingCart.firstItemCart.exists).ok()
    await t.expect(ShoppingCart.firstItemCart.innerText).eql('Sauce Labs Backpack')
    await t.expect(ShoppingCart.firstButtonRemove.innerText).eql('REMOVE')    
})

/*  testcafe chrome page_model\test\TestShopSingleItem.js */ 