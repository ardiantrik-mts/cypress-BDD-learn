Feature: User Login

  Scenario: Failed Login: Login without filling username and password
    When I visit saucedemo website
    And I press the login button
    Then I should see an alert "Epic sadface: Username is required" appear

  Scenario: Failed Login: Login with filling username only
    When I visit saucedemo website
    And I enter the username "standard_user"
    And I press the login button
    Then I should see an alert "Epic sadface: Password is required" appear

  Scenario: Failed Login: Login with filling username and wrong password
    When I visit saucedemo website
    And I enter the username "standard_user"
    And I enter the password "123"
    And I press the login button
    Then I should see an alert "Epic sadface: Username and password do not match any user in this service" appear

  Scenario: Successful Login
    When I visit saucedemo website
    And I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I press the login button
    Then I should see inventory page