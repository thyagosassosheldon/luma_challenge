import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-mochawesome-reporter/cucumberSupport";

Given("I go to a wrong page", () => {
    cy.intercept("GET", "/nonexistentpage", () => {}).as("nonexistentpage");
	cy.visit("/nonexistentpage", { failOnStatusCode: false });
});

Then("I receive a 404 error", () => {
	cy.wait("@nonexistentpage").its("response.statusCode").should("eq", 404);
});

Then("I should enter a 404 page", () => {
	cy.contains("Page Not Found");
});
