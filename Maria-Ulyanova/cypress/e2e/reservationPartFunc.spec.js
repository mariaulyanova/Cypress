import page from '../pages/page.js';
import productPage from '../pages/productPage.js';
import reservationPage from '../pages/reservationPage.js';

describe('Reservation part functionality', () => {
  beforeEach(() => page.open())

  it('Should navigate to the  to Reservation Section for Accommodation', () => {
    productPage.openReservationSectionForAccommodation();
    productPage.expectedResult();
  });
  it('Should navigate to the Cars reservation section', () => {
    productPage.openReservationPartForCars();
    productPage.expectedResult();
  });

  it('Should navigate to the Tours reservation section and verify layout', () => {
    productPage.openReservationPartForTours();
    productPage.expectedResult();
  });

  it('Should confirm accommodation reservation', () => {
    productPage.openReservationSectionForAccommodation();
    reservationPage.filledReservationField();
    cy.get('#apartment-booking').click();
    cy.get(reservationPage.expectError).should('exist');
  });

  it('Should confirm car reservation', () => {
    productPage.openReservationPartForCars();
    reservationPage.filledReservationField();
    cy.get('#car-booking').click();
    cy.get(reservationPage.expectError).should('exist');
  });

  it('Should confirm tour reservation', () => {
    productPage.openReservationPartForTours();
    reservationPage.filledReservationField();
    cy.get('#tour-booking').click();
    cy.get(reservationPage.expectError).should('exist');
  });
})