Feature: Inventory Transaction

    Scenario: Add product to cart
        Given I login with username "standard_user" and password "secret_sauce" in saucedemo website
        When I add product 1 to cart
        Then I should see the "add" button change to "remove"

    Scenario: Remove product from cart 
        Given I login with username "standard_user" and password "secret_sauce" in saucedemo website
        When I add product 1 to cart
        And I remove product 1 from cart
        Then I should see the "remove" button change to "add"
    
    Scenario: Counter in cart 
        Given I login with username "standard_user" and password "secret_sauce" in saucedemo website
        When I add product 1 to cart
        Then I should see the cart counter show 1
        And I add product 2 to cart
        Then I should see the cart counter show 2
        And I remove product 1 from cart
        And I remove product 2 from cart
        Then I should see the cart counter disappear

    Scenario: Full Transaction
        Given I login with username "standard_user" and password "secret_sauce" in saucedemo website
        When I add product 1 to cart
        And I add product 2 to cart
        And I click the cart button
        # Then I should go to cart page
        And I click the checkout button
        # Then I should go to the checkout recipient page
        And I fill the first name "testing"
        And I fill the last name "automation"
        And I fill the zip code "9910238"
        And I click the continue button
        # Then I should go to the checkout overview page
        And I click the finish button
        Then I should see the checkout complete page

