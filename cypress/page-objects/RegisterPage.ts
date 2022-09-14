import { Users } from "../data-modals/Users";

class RegisterPage {
  public signUp(user: Users) {
    cy.get("input[placeholder='Username']").type(user.username);
    cy.get("input[placeholder='Email']").type(user.email);
    cy.get("input[placeholder='Password']").type(user.password);
    cy.intercept({ url: "/api/users", method: "POST" }).as("users");
    cy.get(".btn").click();
    cy.wait(`@users`).then(function (response) {
      expect(response.response.statusCode).to.be.oneOf([200, 202, 307]);
    });
  }
}
export const registerPage = new RegisterPage();
