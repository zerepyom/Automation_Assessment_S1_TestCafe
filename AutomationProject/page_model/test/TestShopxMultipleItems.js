import LoginPage from  '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constant'
import ShoppingCart from '../pages/ShoppingCart';

fixture('Login feature testing: Test Scenario 6')
    .page `https://www.saucedemo.com/`;

/*  Test Scenario 6: Add multiple items to shopping cart 
    User  select the first 3 elements on the Products page, once added, it check the button change from ADD to REMOVE
    On the Shopping Cart page its verified for 3 items added to the cart and check the product names added. */
test ('Test Scenario 6: User add multiple items to the Shooping Cart', async t => {
    await LoginPage.submitLoginform(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageContainer.exists).ok()
    await t.expect(ProductsPage.pageTitle.innerText).eql('Products')

    /* Adding First Item to the Cart*/ 
    await t.expect(ProductsPage.singleItemCart.exists).ok()
    await t.expect(ProductsPage.singleItemCart.innerText).eql('Sauce Labs Backpack')
    .click(ProductsPage.firstButtonAdd)
    await t.expect(ProductsPage.firstButtonRemove.innerText).eql('REMOVE')
    /* Adding Second Item to the Cart*/ 
    await t.expect(ProductsPage.secondItemCart.exists).ok()
    await t.expect(ProductsPage.secondItemCart.innerText).eql('Sauce Labs Bike Light')
    .click(ProductsPage.secondButtonAdd)
    await t.expect(ProductsPage.secondButtonRemove.innerText).eql('REMOVE')
    /* Adding Third  Item to the Cart*/ 
    await t.expect(ProductsPage.thirdItemCart.exists).ok()
    await t.expect(ProductsPage.thirdItemCart.innerText).eql('Sauce Labs Bolt T-Shirt')
    .click(ProductsPage.secondButtonAdd)
    await t.expect(ProductsPage.thirdButtonRemove.innerText).eql('REMOVE')
    /* Checking the Shopping Cart has 3 items added */
    .click(ProductsPage.shoppingButton)
    await t.expect(ShoppingCart.pageTitle.exists).ok()
    await t.expect(ShoppingCart.pageTitle.innerText).eql('Your Cart')
    await t.expect(ShoppingCart.totalItemsCart.innerText).eql('3')
})

/*  testcafe chrome page_model\test\TestShopxMultipleItems.js  */ 