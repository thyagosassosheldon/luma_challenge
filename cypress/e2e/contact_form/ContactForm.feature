Feature: Contact Form validation
As a user
I want to contact Luma

    Background:
        Given I access the Home Page
        And I go to Contact Form Page

    Scenario: Fill with invalid information
        When I fill with invalid information
        Then I should receive error alerts

    Scenario: Fill with valid information
        When I fill with valid information
        Then I should not reveice any error

