/// <reference types="cypress" />

describe("AntiPattern Example - Hard coded wait", function () {
  it("Should be able to login", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.wait(5000);
  });
});
