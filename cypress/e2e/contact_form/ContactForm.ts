import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-mochawesome-reporter/cucumberSupport";
import 'cypress-iframe';

When("I go to Contact Form Page", () => {
    cy.get('.hero-button-group > .primary').click();
    cy.get("iframe");
});

When("I fill with invalid information", () => {
    cy.iframe("iframe.iframe-full-height").find("input[name='firstname']").click();
    cy.iframe("iframe.iframe-full-height").find("input[name='lastname']").click();
    cy.iframe("iframe.iframe-full-height").find("input[name='phone']").click();
    cy.iframe("iframe.iframe-full-height").find("input[name='company']").click();
    cy.iframe("iframe.iframe-full-height").find("input[name='organization_name']").click();
    cy.iframe("iframe.iframe-full-height").find("input[name='email']").type("lore");
});

Then("I should receive error alerts", () => {
    cy.iframe("iframe.iframe-full-height").find("div.hs_firstname ul[role='alert'] label").should("have.text", "Please complete this required field.");
    cy.iframe("iframe.iframe-full-height").find("div.hs_lastname ul[role='alert']").should("have.text", "Please complete this required field.");
    cy.iframe("iframe.iframe-full-height").find("div.hs_email ul[role='alert']").should("have.text", "Email must be formatted correctly.");
    cy.iframe("iframe.iframe-full-height").find("div.hs_phone ul[role='alert']").should("have.text", "Please complete this required field.");
    cy.iframe("iframe.iframe-full-height").find("div.hs_company ul[role='alert']").should("have.text", "Please complete this required field.");
    cy.iframe("iframe.iframe-full-height").find("div.hs_organization_name ul[role='alert']").should("have.text", "Please complete this required field.");
});

When("I fill with valid information", () => {
    cy.fixture("ContactFormValid").then((contact) => {
        cy.iframe("iframe.iframe-full-height").find("input[name='firstname']").type(contact.firstName);
        cy.iframe("iframe.iframe-full-height").find("input[name='lastname']").type(contact.lastName);
        cy.iframe("iframe.iframe-full-height").find("input[name='email']").type(contact.email);
        cy.iframe("iframe.iframe-full-height").find("input[name='phone']").type(contact.phone);
        cy.iframe("iframe.iframe-full-height").find("input[name='organization_name']").type(contact.company);
        cy.iframe("iframe.iframe-full-height").find("select[name='provider_range']").select(contact.range);
        cy.iframe("iframe.iframe-full-height").find("select[name='ehr']").select(contact.ehr);
        cy.iframe("iframe.iframe-full-height").find("select[name='organization_type']").select(contact.type);
        cy.iframe("iframe.iframe-full-height").find("div.hs_what_are_you_interested_in_ textarea").type(contact.text1);
        cy.iframe("iframe.iframe-full-height").find("div.hs_how_d_you_hear_about_us_ textarea").type(contact.text2);
      });
});

Then("I should not reveice any error", () => {
    cy.iframe("iframe.iframe-full-height").find("ul[role='alert']").should("not.exist");
});

