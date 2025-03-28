import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("I access the Home Page", () => {
	cy.visit("");
    cy.title().should("equal", "Luma Health | Patient Success Platform");
});

Then("I should verify the Home Page loads sucessfully", () => {
	cy.contains("Manual Tasks’ Worst Nightmare").should("be.visible");
});

Then("I should verify the Navigation Bar section", () => {
	cy.get("nav#navbar").should("be.visible").within(() => {
      cy.get("a.navbar-logo").should("have.attr", "title", "luma");

      cy.get("ul.main-menu-v2").should("be.visible");

      cy.get("div.actions").get("a#header_login").should("be.visible").and("have.text", "Log in");
	  cy.get("div.actions").get("a.primary").should("be.visible").and("have.text", "Get a demo");
    })
});

Then("I should verify Hero section", () => {
	cy.get("div.hero-text-container").within(() => {
		cy.get("h1.hero-section-title").should("be.visible").and("contain.text", "Manual Tasks’ Worst Nightmare");
	
		cy.get("p.hero-section-subtitle").should("be.visible");
	
		cy.get("div.hero-button-group").within(() => {
		  cy.get("a[title='Build your demo']").should("be.visible").and("have.text", "Build your demo");
	
		  cy.get("a[title='See what it does']").should("be.visible").and("have.text", "See what it does");
		});
	  });
});

Then("I should verify Footer section", () => {
	cy.get('.footer-copy-content').within(() => {

		cy.get('div.left-content').within(() => {
			cy.get("ul.f-sub-menu").should("be.visible");
			cy.get("div.copy").should("be.visible");
			});

		cy.get('div.social-menu').within(() => {
			cy.get("ul.f-social").should("be.visible");
		});
	})
});
