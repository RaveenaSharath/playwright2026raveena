Feature: Login to ecommerce domain

  Scenario: Add to the cart page
  Given I have and "username" and "password"
    When Add "zara code 3" to a cart
    Then verify "zara code 3" is in the cart
    When Enter valid details and place the Order
    Then I should have heard "hello"