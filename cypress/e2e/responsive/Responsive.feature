Feature: Responsive Design
As a user
I want to access their website in any device

    Background: Visiting the homepage
        Given I access the Home Page

    Scenario: Validade responsive design on a mobile device
        When I change to a mobile view
        Then I should not have any desktop element
        And I should be able to interact with the side menu

    Scenario: Validade responsive design on a tablet
        When I change to a tablet view
        Then I should not have any desktop element
        And I should be able to interact with the side menu