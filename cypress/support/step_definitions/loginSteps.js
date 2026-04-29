/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import login from "../pages/loginPage";

Given("I am in the login screen", () => {
  login.accessLoginPage();
});

Then("Fill my credencials", (email, password) => {
  login.fillEmail("weslei@gmail.com");
  login.fillPassword("123123");
});

When("I click on the login button", () => {
  login.confirmLogin();
});

Then("I see the success message {string}", (message) => {
  login.checkSuccessMessage(message);
});
