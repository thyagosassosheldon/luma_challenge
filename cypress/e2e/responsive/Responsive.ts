import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-mochawesome-reporter/cucumberSupport";

When("I change to a mobile view", () => {
	cy.viewport("iphone-x");

});

Then("I should not have any desktop element", () => {
	cy.get("*.hide-desktop").should("not.be.visible");
});

Then("I should be able to interact with the side menu", () => {
    cy.get("a.navbar-trigger").click();
    cy.get("ul.main-menu-v2 > li").should("have.length", 5);
    cy.get("a.navbar-trigger").click();
});

When("I change to a tablet view", () => {
	cy.viewport("ipad-2");
});
