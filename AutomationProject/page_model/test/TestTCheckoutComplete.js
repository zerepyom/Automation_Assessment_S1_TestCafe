import LoginPage from  '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constant'
import ShoppingCart from '../pages/ShoppingCart'
import CheckOutPage from '../pages/CheckOutPage'
import CheckOutOverviewPage from '../pages/CheckOutOverviewPage'
import OrderCompletedPage from '../pages/OrderCompletedPage'

fixture('Login feature testing: Test Scenario 8')
    .page `https://www.saucedemo.com/`;

/*  Test Scenario 8: Fill user's information
    Login to the page, select a product, navigate to the shoping cart
    provide user data to checkoutproducts, complete the transaction and 
    verify the order is complete */    
test ('Test Scenario 8: Fill users information', async t => {
    /* User Login*/
    await LoginPage.submitLoginform(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageContainer.exists).ok()
    /* Verifying we are in Products Page and selecting product*/
    await t.expect(ProductsPage.pageTitle.innerText).eql('Products')
    await t.expect(ProductsPage.singleItemCart.exists).ok()
    await t.expect(ProductsPage.singleItemCart.innerText).eql('Sauce Labs Backpack')
    /* Adding First product*/
    .click(ProductsPage.firstButtonAdd)
    await t.expect(ProductsPage.firstButtonRemove.innerText).eql('REMOVE')
    /* Moving to shopping cart and veifying 1 item on cart and match the product selected*/
    .click(ProductsPage.shoppingButton)
    await t.expect(ShoppingCart.pageTitle.exists).ok()
    await t.expect(ShoppingCart.pageTitle.innerText).eql('Your Cart')
    await t.expect(ShoppingCart.totalItemsCart.innerText).eql('1')
        await t.expect(ShoppingCart.firstItemCart.exists).ok()
    await t.expect(ShoppingCart.firstItemCart.innerText).eql('Sauce Labs Backpack')
    await t.expect(ShoppingCart.firstButtonRemove.innerText).eql('REMOVE')
    /* Checkout order with user data */
    .click(ShoppingCart.checkoutButton)
    await t.expect(CheckOutPage.pageTitle.innerText).eql('Checkout: Your Information')
    await CheckOutPage.submitInformation(CREDENTIALS.CUSTOMER.FIRST,CREDENTIALS.CUSTOMER.LAST,CREDENTIALS.CUSTOMER.ZIPC)
    /* Verifying we are in the checkout page with 1 item and its completed the order*/
    await t.expect(CheckOutOverviewPage.pageTitle.exists).ok()
    await t.expect(CheckOutOverviewPage.pageTitle.innerText).eql('Checkout: Overview')
    await t.expect(CheckOutOverviewPage.totalItemsCart.innerText).eql('1')
    await t.expect(CheckOutOverviewPage.firstItemCart.exists).ok()
    await t.expect(CheckOutOverviewPage.firstItemCart.innerText).eql('Sauce Labs Backpack')
    .click(CheckOutOverviewPage.finishButton)
    /* Order completed, thanks message in the screen */
    await t.expect(OrderCompletedPage.pageTitle.exists).ok()
    await t.expect(OrderCompletedPage.pageTitle.innerText).eql('Finish')
    await t.expect(OrderCompletedPage.orderThanks.exists).ok()
    await t.expect(OrderCompletedPage.orderThanks.innerText).eql('THANK YOU FOR YOUR ORDER')
})

/*  testcafe chrome page_model\test\TestTCheckoutComplete.js  */ 
