import page from "./page.js";

export default new class ProductPage {
  navigationBar = "div#myNavbar";
  accommodationDropDown = "#myNavbar > ul > li:nth-child(2) > a";
  carDropDown = "#myNavbar > ul > li:nth-child(3) > a";
  toursDropDownMenu = "#myNavbar > ul > li:nth-child(4) > a";
  accommodationInYerevan = "a[href='https://irent.am/apartments/type/all/location/yerevan']";
  carCheckClass = "a[href*='economy']";
  bookNowInaccommodation = "div.apartment-info~a[href*='53']";
  bookNowInCar = "div.car-info a[href*='29'].book-btn";
  bookNowTour = "div.tour-info~a[href*='stonehenge-34']";
  checkInDate = "input#check-in-time";
  checkOutDate = "input#check-out-time";
  pickUpField = "#pick-up-location";
  dropOffField = "#drop-off-location";
  insertAdult = "select#adults option[value='2']";
  insertChild = "select#children option[value='5']";
  expectedPartOfPage = ".additional-info";
  pickUpFromYerevan = "#pick-up-location option[value='Yerevan Office']";
  dropOffYerevanAirport = "#drop-off-location option[value='Yerevan Airport']";
  dailyTours = "a[href*='daily-tours']";
  tourFieldForAdult = "#tour-adults";
  tourFieldForAdultWithData = "#tour-adults option[value='6']";
  tourFieldForChild = "#tour-children";

  openReservationSectionForAccommodation() {
    page.dropDownMenu(this.accommodationDropDown, this.accommodationInYerevan);
    cy.get(this.bookNowInaccommodation).click();
    cy.get(this.checkInDate).click();
    cy.get(this.checkOutDate).click();
    cy.get(this.insertAdult).click({ force: true });
    cy.get(this.insertChild).click({ force: true });
  };

  expectedResult() {
    cy.get(this.expectedPartOfPage).should('exist');
  };

  openReservationPartForCars() {
    page.dropDownMenu(this.carDropDown, this.carCheckClass);
    cy.get(this.bookNowInCar).click();
    cy.get(this.pickUpField).select('Yerevan Airport');
    cy.get(this.dropOffField).select('Gyumri Airport');
  };

  openReservationPartForTours() {
    page.dropDownMenu(this.toursDropDownMenu, this.dailyTours);
    cy.get(this.bookNowTour).click();
    cy.get(this.tourFieldForAdult).select(6);
    cy.get(this.tourFieldForChild).select(10);
  };
}