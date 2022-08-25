/// <reference types="cypress"/>

import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import InventoryPage from "../../pages/InventoryPage";

let loginPage = new LoginPage()
let inventoryPage = new InventoryPage()

When("I visit saucedemo website", () => {
    cy.visit('https://www.saucedemo.com/');
});

And("I enter the username {string}", (username) => {
    loginPage.textfieldUsername().type(username)
});

And("I enter the password {string}", (password) => {
    loginPage.textfieldPassword().type(password)
});

And("I press the login button", () => {
    loginPage.buttonLogin().click().wait(1000)
});

Then("I should see an alert {string} appear", (alertText) => {
    loginPage.alertInvalid().should('have.text', alertText)
});

Then("I should see inventory page", () => {
    inventoryPage.containerInventoryList().should('be.visible')
});