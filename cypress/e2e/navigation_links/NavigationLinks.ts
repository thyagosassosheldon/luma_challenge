import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-real-events";

When("I hover over the menu {string}", (menu: string) => {
    cy.get("nav#navbar").within(() => {
        cy.contains("ul.main-menu-v2 a[title]", menu).parent("li").realHover();
      });
});

When("I click the navigation link with name {string}", (name: string) => {
    cy.contains("span", name).click();
});

Then("I should be redirected to the link page {string}", (url: string) => {
    cy.url().should("equal", url);
});
