import LoginPage from  '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constant'
import ShoppingCart from '../pages/ShoppingCart'
import CheckOutPage from '../pages/CheckOutPage'
import CheckOutOverviewPage from '../pages/CheckOutOverviewPage'
import OrderCompletedPage from '../pages/OrderCompletedPage'

fixture('Login feature testing: Test Scenario 10')
    .page `https://www.saucedemo.com/`;

/*  Test Scenario 10: Complete a Purchase
    Login to the page, select 2 product, navigate to the shoping cart,
    Ensuring on each page the products selected are being displayed.
    Provide user data to checkout products, complete the transaction and 
    verify the order is complete */    
test ('Test Scenario 10: Purchase Completed - User checkout order completed', async t => {
    /* User Login*/
    await LoginPage.submitLoginform(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageContainer.exists).ok()
    /* Verifying we are in Products Page and selecting product*/
    await t.expect(ProductsPage.pageTitle.innerText).eql('Products')
    
    /* Adding the first Item of the container to the Cart*/ 
    await t.expect(ProductsPage.singleItemCart.exists).ok()
    await t.expect(ProductsPage.singleItemCart.innerText).eql('Sauce Labs Backpack')
    .click(ProductsPage.firstButtonAdd)
    await t.expect(ProductsPage.firstButtonRemove.innerText).eql('REMOVE')    
    /* Adding the second Item of the container to the Cart*/ 
    await t.expect(ProductsPage.secondItemCart.exists).ok()
    await t.expect(ProductsPage.secondItemCart.innerText).eql('Sauce Labs Bike Light')
    .click(ProductsPage.secondButtonAdd)
    await t.expect(ProductsPage.secondButtonRemove.innerText).eql('REMOVE')

    /* Shopping cart, verifying 2 items on cart and match the product selected*/
    .click(ProductsPage.shoppingButton)
    await t.expect(ShoppingCart.pageTitle.exists).ok()
    await t.expect(ShoppingCart.pageTitle.innerText).eql('Your Cart')
    await t.expect(ShoppingCart.totalItemsCart.innerText).eql('2')
    await t.expect(ShoppingCart.firstItemCart.exists).ok()
    await t.expect(ShoppingCart.firstItemCart.innerText).eql('Sauce Labs Backpack')
    await t.expect(ShoppingCart.secondItemCart.exists).ok()
    await t.expect(ShoppingCart.secondItemCart.innerText).eql('Sauce Labs Bike Light')

    /* Checkout order with user data */
    .click(ShoppingCart.checkoutButton)
    await t.expect(CheckOutPage.pageTitle.innerText).eql('Checkout: Your Information')
    await CheckOutPage.submitInformation(CREDENTIALS.CUSTOMER.FIRST,CREDENTIALS.CUSTOMER.LAST,CREDENTIALS.CUSTOMER.ZIPC)

    /* Verifying we are in the checkout page with 2 items and its completed the order*/
    await t.expect(CheckOutOverviewPage.pageTitle.exists).ok()
    await t.expect(CheckOutOverviewPage.pageTitle.innerText).eql('Checkout: Overview')
    await t.expect(CheckOutOverviewPage.totalItemsCart.innerText).eql('2')
    await t.expect(CheckOutOverviewPage.firstItemCart.exists).ok()
    await t.expect(CheckOutOverviewPage.firstItemCart.innerText).eql('Sauce Labs Backpack')
    await t.expect(CheckOutOverviewPage.secondItemCart.exists).ok()
    await t.expect(CheckOutOverviewPage.secondItemCart.innerText).eql('Sauce Labs Bike Light')                   
    .click(CheckOutOverviewPage.finishButton)

    /* Order completed, thanks message in the screen */
    await t.expect(OrderCompletedPage.pageTitle.exists).ok()
    await t.expect(OrderCompletedPage.pageTitle.innerText).eql('Finish')
    await t.expect(OrderCompletedPage.orderThanks.exists).ok()
    await t.expect(OrderCompletedPage.orderThanks.innerText).eql('THANK YOU FOR YOUR ORDER') 
})

/*  testcafe chrome page_model\test\TestTPurchaseCompleted.js   */ 