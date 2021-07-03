Feature: Perform login

  Background:
    Given I'm on the login page

    Scenario: Login with default user
      When I log in with a default user
      Then I shall be on the Flight Finder page