///<reference types="cypress" />

describe("Login Service", () => {
  it("Should be able to generate token with valid credentials", function () {
    cy.request({
      url: Cypress.env("loginEndpoint"), //"/api/users/login",
      method: "POST",
      body: {
        user: {
          email: "mediumtest@test.com",
          password: "test@123",
        },
      },
    }).then((response) => {
      console.log("repsonse", response.body);
    });
  });
});
