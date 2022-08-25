/// <reference types="cypress"/>

import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/InventoryPage";
import CartPage from "../../pages/CartPage";

let inventoryPage = new InventoryPage()
let cartPage = new CartPage()

Given("I login with username {string} and password {string} in saucedemo website", (username,password) => {
    cy.loginSauceDemo(username, password)
});

When("I add product 1 to cart", () => {
    inventoryPage.buttonAddToCartProduct1().click()
});

And("I add product 2 to cart", () => {
    inventoryPage.buttonAddToCartProduct2().click()
});

And("I remove product 1 from cart", () => {
    inventoryPage.buttonRemoveFromCartProduct1().click()
});

And("I remove product 2 from cart", () => {
    inventoryPage.buttonRemoveFromCartProduct2().click()
});

And("I fill the first name {string}", (firstName) => {
    cartPage.textfieldFirstName().type(firstName)
});

And("I fill the last name {string}", (lastname) => {
    cartPage.textfieldLastName().type(lastname)
});

And("I fill the zip code {string}", (zipCode) => {
    cartPage.textfieldPostalCode().type(zipCode)
});

And("I click the cart button", () => {
    inventoryPage.buttonCart().click()
});

And("I click the checkout button", () => {
    cartPage.buttonCheckout().click()
});

And("I click the continue button", () => {
    cartPage.buttonContinue().click()
});

And("I click the finish button", () => {
    cartPage.buttonFinish().click()
});

Then("I should see the {string} button change to {string}", (buttonFrom, buttonTo) => {
    if (buttonFrom == "add" && buttonTo == "remove") {
        inventoryPage.buttonRemoveFromCartProduct1().should('be.visible')
    } else {
        inventoryPage.buttonAddToCartProduct1().should('be.visible')
    }
});

Then("I should see the cart counter show {int}", (countNumber) => {
    inventoryPage.badgeCounterCart().should('have.text', countNumber)
});

Then("I should see the cart counter disappear", () => {
    inventoryPage.badgeCounterCart().should('not.exist')
});

Then("I should go to cart page", () => {
    inventoryPage.badgeCounterCart().should('not.exist')
});

Then("I should see the checkout complete page", () => {
    cartPage.containerCheckoutComplete().should('be.visible')
});

