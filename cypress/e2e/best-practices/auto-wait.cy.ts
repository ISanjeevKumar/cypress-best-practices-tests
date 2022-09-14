/// <reference types="cypress" />

import { Users } from "../../data-modals/Users";
import { app } from "../../page-objects/RealWorldApp";

describe("Best practice Example -How to avoid Hard coded wait", function () {
  let user: Users;
  beforeEach("test setup", () => {
    cy.fixture("register-user.json").then((data) => {
      user = new Users(data);
    });
  });

  it("Should be able to register with new user", () => {
    app.RegisterPage.visit();
    app.RegisterPage.signUp(user);
  });
});
