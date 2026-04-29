/// <reference types="cypress" />

import register from "../pages/registerPage";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the register page", () => {
  register.accessRegisterPage();
});

Then("I fill my credencials", () => {
  register.fillMyCredencials();
});
Then("I fill my name", () => {
  register.fillName();
});
Then("I fill my E-mail", () => {
  register.fillEmail();
});
Then("I fill my password", () => {
  register.fillPassword();
});

When("I click on the register button", () => {
  register.confirmRegister();
});

When("I fill an invalid password {string}", (password) => {
  register.fillInvalidPassword(password);
});
When("I fill an invalid E-mail {string}", (email) => {
  register.fillInvalidEmail(email);
});

Then("I see the message {string}", (message) => {
  register.checkMessage(message);
});

Then("I see the success message", () => {
  register.checkSuccessMessage();
});
