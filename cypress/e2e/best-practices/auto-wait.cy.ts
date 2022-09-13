/// <reference types="cypress" />

import { Users } from "../../data-modals/Users";

describe("Best practice Example -How to avoid Hard coded wait", function () {
  let user: Users;
  beforeEach("test setup", () => {
    cy.fixture("register-user.json").then((data) => {
      user = new Users(data);
    });
  });

  it("Should be able to login", () => {
    cy.visit("https://demo.realworld.io/#/register");
    cy.get("input[placeholder='Username']").type(user.username);
    cy.get("input[placeholder='Email']").type(user.email);
    cy.get("input[placeholder='Password']").type(user.password);
    cy.intercept({ url: "/api/users", method: "POST" }).as("users");
    cy.get(".btn").click();
    cy.wait(`@users`).then(function (response) {
      expect(response.response.statusCode).to.be.oneOf([200, 202, 307]);
    });
  });
});
