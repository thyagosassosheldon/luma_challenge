Feature: Page Not Found
As a user
I want to be informed of a wrong page

    Scenario: Wrong Page validation
        Given I go to a wrong page
        Then I receive a 404 error
        And I should enter a 404 page