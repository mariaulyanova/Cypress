import { testingData } from '../resources/testingData.js';

export default new class ReservationPage {
  agreeButton = "div.terms-content input.check-box";
  bookButton = "#disableBtn";
  firstNameInputField = "input[name='first_name']";
  lastNameInputField = "input[name='last_name']";
  phoneInputField = "input[name='phone']";
  emailInputField = "input[name='email']";
  ageField = "#age";
  ageFieldWithData = "#age option[value='24']";
  nationalityField = "#nationality";
  nationalityFieldWithDat = "#nationality option[value='Aruba']";
  expectError = "div.notfound-404";

  filledReservationField() {
    cy.get(this.agreeButton).click();
    cy.get(this.bookButton).click();
    cy.get(this.firstNameInputField).type(testingData.data.firstName);
    cy.get(this.lastNameInputField).type(testingData.data.lastName);
    cy.get(this.phoneInputField).type(testingData.data.phoneNumber);
    cy.get(this.emailInputField).type(testingData.data.email);
    cy.get(this.ageField).select(25);
    cy.get(this.nationalityField).select('Aruba');
  };
}