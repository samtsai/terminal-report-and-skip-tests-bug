/// <reference types="cypress" />

const { skipOn } = require("@cypress/skip-test");

describe("page", () => {
  before(() => {
    skipOn(true);
  });

  it("works", () => {
    cy.visit("https://example.cypress.io");
  });
});
