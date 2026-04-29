///<reference types="cypress" />

export default {
  accessLoginPage() {
    cy.visit("/login");
  },

  confirmLogin() {
    cy.get("#btnLogin").click();
  },

  checkSuccessMessage(message) {
    cy.get("#swal2-title").contains(message)
  },

  fillEmail(email) {
    cy.get("#user").type(email);
  },

  fillPassword(password) {
    cy.get("#password").type(password)
  }
};
