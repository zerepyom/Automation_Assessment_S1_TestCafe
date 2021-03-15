import LoginPage from  '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constant'
import ShoppingCart from '../pages/ShoppingCart';
import CheckOutPage from '../pages/CheckOutPage';

fixture('Login feature testing: Test Scenario 7')
    .page `https://www.saucedemo.com/`;

/*  Test Scenario 7: Continue with missing information
    Trying to perform a checkout without provide customer data, first name, last name or zip code
    using Constants to provide Customer information
*/
test ('Test Scenario 7.0: User checkout order without customer information', async t => {
    await LoginPage.submitLoginform(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageContainer.exists).ok()
    await t.expect(ProductsPage.pageTitle.innerText).eql('Products')
    await t.expect(ProductsPage.singleItemCart.exists).ok()
    await t.expect(ProductsPage.singleItemCart.innerText).eql('Sauce Labs Backpack')
    .click(ProductsPage.firstButtonAdd)
    await t.expect(ProductsPage.firstButtonRemove.innerText).eql('REMOVE')

    .click(ProductsPage.shoppingButton)
    await t.expect(ShoppingCart.pageTitle.exists).ok()
    await t.expect(ShoppingCart.pageTitle.innerText).eql('Your Cart')
    await t.expect(ShoppingCart.totalItemsCart.innerText).eql('1')
    await t.expect(ShoppingCart.firstItemCart.exists).ok()
    await t.expect(ShoppingCart.firstItemCart.innerText).eql('Sauce Labs Backpack')
    await t.expect(ShoppingCart.firstButtonRemove.innerText).eql('REMOVE')

    .click(ShoppingCart.checkoutButton)
    await t.expect(CheckOutPage.pageTitle.innerText).eql('Checkout: Your Information')
    .click(CheckOutPage.continueButton)
    await t.expect(CheckOutPage.errorButton.exists).ok()
    await t.expect(CheckOutPage.errorMessage.exists).ok()
    await t.expect(CheckOutPage.errorMessage.innerText).eql('Error: First Name is required\nCANCEL')
})

test ('Test Scenario 7.1: User checkout order: Missing First Name ', async t => {
    await LoginPage.submitLoginform(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageContainer.exists).ok()
    await t.expect(ProductsPage.pageTitle.innerText).eql('Products')
    await t.expect(ProductsPage.singleItemCart.exists).ok()
    await t.expect(ProductsPage.singleItemCart.innerText).eql('Sauce Labs Backpack')
    .click(ProductsPage.firstButtonAdd)
    await t.expect(ProductsPage.firstButtonRemove.innerText).eql('REMOVE')

    .click(ProductsPage.shoppingButton)
    await t.expect(ShoppingCart.pageTitle.exists).ok()
    await t.expect(ShoppingCart.pageTitle.innerText).eql('Your Cart')
    await t.expect(ShoppingCart.totalItemsCart.innerText).eql('1')
    await t.expect(ShoppingCart.firstItemCart.exists).ok()
    await t.expect(ShoppingCart.firstItemCart.innerText).eql('Sauce Labs Backpack')
    await t.expect(ShoppingCart.firstButtonRemove.innerText).eql('REMOVE')

    /* Prtoviding Last name and Zip Code but missing First name*/
    .click(ShoppingCart.checkoutButton)
    await t.expect(CheckOutPage.pageTitle.innerText).eql('Checkout: Your Information') 
    await t.typeText(CheckOutPage.lastname,CREDENTIALS.CUSTOMER.LAST, {paste:true})
    await t.typeText(CheckOutPage.zipcode,CREDENTIALS.CUSTOMER.ZIPC, {paste:true})
    await t.click(CheckOutPage.continueButton)

    await t.expect(CheckOutPage.errorButton.exists).ok()
    await t.expect(CheckOutPage.errorMessage.exists).ok()
    await t.expect(CheckOutPage.errorMessage.innerText).eql('Error: First Name is required\nCANCEL')

})

test ('Test Scenario 7.2: User checkout order: Missing Last Name ', async t => {
    await LoginPage.submitLoginform(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageContainer.exists).ok()
    await t.expect(ProductsPage.pageTitle.innerText).eql('Products')
    await t.expect(ProductsPage.singleItemCart.exists).ok()
    await t.expect(ProductsPage.singleItemCart.innerText).eql('Sauce Labs Backpack')
    .click(ProductsPage.firstButtonAdd)
    await t.expect(ProductsPage.firstButtonRemove.innerText).eql('REMOVE')

    .click(ProductsPage.shoppingButton)
    await t.expect(ShoppingCart.pageTitle.exists).ok()
    await t.expect(ShoppingCart.pageTitle.innerText).eql('Your Cart')
    await t.expect(ShoppingCart.totalItemsCart.innerText).eql('1')
    await t.expect(ShoppingCart.firstItemCart.exists).ok()
    await t.expect(ShoppingCart.firstItemCart.innerText).eql('Sauce Labs Backpack')
    await t.expect(ShoppingCart.firstButtonRemove.innerText).eql('REMOVE')

    /* Prtoviding First name and Zip Code but missing Last name*/
    .click(ShoppingCart.checkoutButton)
    await t.expect(CheckOutPage.pageTitle.innerText).eql('Checkout: Your Information') 
    await t.typeText(CheckOutPage.firstname,CREDENTIALS.CUSTOMER.FIRST, {paste:true})
    await t.typeText(CheckOutPage.zipcode,CREDENTIALS.CUSTOMER.ZIPC, {paste:true})
    await t.click(CheckOutPage.continueButton)

    await t.expect(CheckOutPage.errorButton.exists).ok()
    await t.expect(CheckOutPage.errorMessage.exists).ok()
    await t.expect(CheckOutPage.errorMessage.innerText).eql('Error: Last Name is required\nCANCEL')
})

test ('Test Scenario 7.3: User checkout order: Missing Zip Code', async t => {
    await LoginPage.submitLoginform(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageContainer.exists).ok()
    await t.expect(ProductsPage.pageTitle.innerText).eql('Products')
    await t.expect(ProductsPage.singleItemCart.exists).ok()
    await t.expect(ProductsPage.singleItemCart.innerText).eql('Sauce Labs Backpack')
    .click(ProductsPage.firstButtonAdd)
    await t.expect(ProductsPage.firstButtonRemove.innerText).eql('REMOVE')

    .click(ProductsPage.shoppingButton)
    await t.expect(ShoppingCart.pageTitle.exists).ok()
    await t.expect(ShoppingCart.pageTitle.innerText).eql('Your Cart')
    await t.expect(ShoppingCart.totalItemsCart.innerText).eql('1')
    await t.expect(ShoppingCart.firstItemCart.exists).ok()
    await t.expect(ShoppingCart.firstItemCart.innerText).eql('Sauce Labs Backpack')
    await t.expect(ShoppingCart.firstButtonRemove.innerText).eql('REMOVE')

    /* Prtoviding First and Last name but missing Zip Code*/
    .click(ShoppingCart.checkoutButton)
    await t.expect(CheckOutPage.pageTitle.innerText).eql('Checkout: Your Information') 
    await t.typeText(CheckOutPage.firstname,CREDENTIALS.CUSTOMER.FIRST, {paste:true})
    await t.typeText(CheckOutPage.lastname,CREDENTIALS.CUSTOMER.LAST, {paste:true})
    await t.click(CheckOutPage.continueButton)

    await t.expect(CheckOutPage.errorButton.exists).ok()
    await t.expect(CheckOutPage.errorMessage.exists).ok()
    await t.expect(CheckOutPage.errorMessage.innerText).eql('Error: Postal Code is required\nCANCEL')
})

/*  testcafe chrome page_model\test\TestTCheckout.js  */ 
