Feature: Register User

  Me as an client
  Need to access the system
  To buy something that i want

  Background: access register page
    Given I am on the register page

  @successRegister
  Scenario: Register with success
    And I fill my credencials
    When I click on the register button
    Then I see the success message


  Scenario: Register Without name
    And I fill my E-mail
    And I fill my password
    When I click on the register button
    Then I see the message "O campo nome deve ser prenchido"


  Scenario: Register Without E-mail
    And I fill my name
    And I fill my password
    When I click on the register button
    Then I see the message "O campo e-mail deve ser prenchido corretamente"


  Scenario: Register Without password
    And I fill my name
    When I fill my E-mail
    When I click on the register button
    Then I see the message "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Register using an invalid E-mail
    And I fill my name
    When I fill an invalid E-mail "invalidEmail"
    When I fill my password
    When I click on the register button
    Then I see the message "O campo e-mail deve ser prenchido corretamente"


  Scenario: Register using an invalid password
    And I fill my name
    And I fill my E-mail
    When I fill an invalid password "123"
    When I click on the register button
    Then I see the message "O campo senha deve ter pelo menos 6 dígitos"