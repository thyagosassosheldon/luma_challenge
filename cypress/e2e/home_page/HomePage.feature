Feature:
As a user
I want to access the Luma Home Page

    Background:
        Given I access the Home Page

    Scenario: Verify the Home Page loads sucessfully
        Then I should verify the Home Page loads sucessfully

    Scenario: Verify Home Page elements are being displayed correctly
        Then I should verify the Navigation Bar section
        Then I should verify Hero section
        Then I should verify Footer section