/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const datas = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),

  invalidEmail: "invalidEmail",
  invalidPassword: "123",
};

const formElements = {
  form: ".account_form",
  elements: {
    buttons: {
      registerBtn: "#btnRegister",
      loginBtn: "#btnLogin",
    },
    fields: {
      name: "#user",
      email: "#email",
      password: "#password",
    },
    confirmationTitle: "#swal2-title",
    confirmationSubtitle: "#swal2-html-container",
  },
};

export default {
  accessRegisterPage() {
    cy.visit("/register");
  },

  fillMyCredencials() {
    cy.get(formElements.elements.fields.name).type(datas.name);
    cy.get(formElements.elements.fields.email).type(datas.email);
    cy.get(formElements.elements.fields.password).type(datas.password);
  },

  confirmRegister() {
    cy.get(formElements.elements.buttons.registerBtn).click();
  },

  checkSuccessMessage() {
    cy.get(formElements.elements.confirmationTitle)
      .should("be.visible")
      .contains("Cadastro realizado!");
    cy.get(formElements.elements.confirmationSubtitle)
      .should("be.visible")
      .contains(`Bem-vindo ${datas.name}`);
  },

  checkMessage(message) {
    cy.get(formElements.form).should("be.visible").contains(message)
  }, 

  fillName() {
    cy.get(formElements.elements.fields.name).type(datas.name);
  },

  fillEmail() {
    cy.get(formElements.elements.fields.email).type(datas.email);
  },

  fillPassword() {
    cy.get(formElements.elements.fields.password).type(datas.password);
  },

  fillInvalidPassword(pwd) {
    cy.get(formElements.elements.fields.password).type(pwd);
  },

  fillInvalidEmail(email) {
    cy.get(formElements.elements.fields.email).type(email);
  },
};
