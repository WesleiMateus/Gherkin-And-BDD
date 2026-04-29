Feature: Login

  Scenario: Login with success
    Given I am in the login screen
    And Fill my credencials
    When I click on the login button
    Then I see the success message "Login realizado"
