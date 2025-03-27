import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("I access the Home Page", () => {
	cy.visit("");
    cy.title().should("equal", "Luma Health | Patient Success Platform");
});

Then("I should verify the Home Page loads sucessfully", () => {
	cy.contains("Manual Tasks’ Worst Nightmare").should("be.visible");
});

Then("I should verify the Navigation Bar section", () => {
});

Then("I should verify Hero section", () => {
});

Then("I should verify Footer section", () => {
});
