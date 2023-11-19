import page from "./page";

export default new class MainPage {
  seeAllAppartments = "apartments";
  seeAllCars = "cars";
  seeAllTours = "tours";
  contextInside = "#cars";
  firstAccommodation = "div.apartment-item>a[href*='avenue-53']:nth-child(1)";
  firstCar = "div.col-sm-3>a[href*='vip-30']";
  firstTour = "div.tour-item>a[href*='stonehenge-34']:nth-child(1)";
  boxInsideReservation = "section.carContent";
  containerForAppartment = "#apartments";
  conteinerForCar = "section#cars:nth-child(6)";
  containerForTours = "section#cars:nth-child(8)";

  filmstripBlock = (index = 4) => `section#cars:nth-child(${index})`;
  seeAllButtons = button => `button>a[href*='${button}']`;
  pageNumber = number => `li a[href='https://irent.am/tours?page=${number}']`;
  contentOnThePage = content => `div.col-sm-3>a[href*=${content}]:nth-child(1)`;
  slickArrowAppartments = position => `#apartments~section:nth-child(4) i.icon-${position}`;
  slickArrowCars = position => `#cars:nth-child(6) i.icon-${position}`;
  slickArrowTours = position => `#cars:nth-child(8) i.icon-${position}`;

  checkVisibility(index = 4) {
    cy.get(this.filmstripBlock(index)).scrollIntoView({ block: "center", inline: "center" });
    cy.get(this.filmstripBlock(index)).should('be.visible');;
  };

  clickButton(path) {
    cy.get(path).scrollIntoView();
    cy.get(path).click({ force: true });
  };

  checkContextInside(button, item) {
    this.clickButton(this.seeAllButtons(button));
    cy.get(this.contextInside).scrollIntoView();
    cy.get(this.contentOnThePage(item)).should('be.visible');
  };

  checkContextInsideTours() {
    this.clickButton(this.seeAllButtons(this.seeAllTours));
    page.scrollAndClick(this.contextInside, this.pageNumber("6"));
    cy.get(this.contentOnThePage('nights-3')).should('be.visible');
  };

  verifyContext(button, firstElemt) {
    this.clickButton(this.seeAllButtons(button));
    cy.get(firstElemt).click();
    cy.get(this.boxInsideReservation).should('be.visible');
  };

  clickOnElement(locator) {
    cy.get(locator).click();
  };
}
