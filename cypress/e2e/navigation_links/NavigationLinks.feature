Feature: Navigation Links
As a user
I want to access the Navigation Links

    Background:
        Given I access the Home Page

    Scenario: Navigation Links Validation
        When I hover over the menu "<menu>"
        And I click the navigation link with name "<name>"
        Then I should be redirected to the link page "<url>"
    Examples:
            | menu         | name                     | url                                                                              |
            | Platform     | Platform                 | https://www.lumahealth.io/patient-success-platform/                              |
            | Platform     | Access & Retention       | https://www.lumahealth.io/patient-success-platform/patient-access-and-retention/ |
            | Platform     | Patient Communication    | https://www.lumahealth.io/patient-success-platform/patient-communication/        |
            | Platform     | Registration and Prep    | https://www.lumahealth.io/patient-success-platform/patient-registration/         |
            | Platform     | Staff Efficiency         | https://www.lumahealth.io/patient-success-platform/staff-efficiency/             |
            | Who We Serve | Who We Serve             | https://www.lumahealth.io/who-we-serve/                                          |
            | Who We Serve | Implementation & Support | https://www.lumahealth.io/who-we-serve/implementation-and-support/               |
            | Who We Serve | Enterprise Health Systems| https://www.lumahealth.io/who-we-serve/enterprise-health-systems/                |
            | Who We Serve | Specialty Groups         | https://www.lumahealth.io/who-we-serve/specialty-groups/                         |
            | Who We Serve | Regional & Rural Care    | https://www.lumahealth.io/who-we-serve/regional-and-rural-care/                  |
            | Who We Serve | Primary Care             | https://www.lumahealth.io/who-we-serve/primary-care/                             |
            | Integrations | EHR Integrations         | https://www.lumahealth.io/integrations-2/                                        |
            | Learn        | Learn Hub                | https://www.lumahealth.io/learn/                                                 |
            | Learn        | Customer Stories         | https://www.lumahealth.io/learn/customer-stories/                                |
            | Learn        | Videos                   | https://www.lumahealth.io/learn/videos/                                          |
            | Learn        | Resources                | https://www.lumahealth.io/learn/resources/                                       |