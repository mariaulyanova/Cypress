import page from '../pages/page.js';
import mainPage from '../pages/mainPage.js';

const indexForAccommodation = 4;
const indexForCar = 6;
const indexForTour = 8;
const indexForGuide = 10;

describe("Filmstrip element preview on accommodation, cars, tours and guides tabs", () => {
  beforeEach(() => page.open())

  it("Verify Filmstrip Element Visibility for accommodations", () => {
    mainPage.checkVisibility(indexForAccommodation);
  });

  it("Verify Filmstrip Element Visibility for cars", () => {
    mainPage.checkVisibility(indexForCar);
  });

  it("Verify Filmstrip Element Visibility for tours", () => {
    mainPage.checkVisibility(indexForTour);
  });

  it("Verify Filmstrip Element Visibility for guides", () => {
    mainPage.checkVisibility(indexForGuide);
  });

  it("Verify Filmstrip Navigation appartments", () => {
    mainPage.checkContextInside(mainPage.seeAllAppartments, 'in-big-center-yerevan-5');
  });

  it("Verify Filmstrip Navigation cars", () => {
    mainPage.checkContextInside(mainPage.seeAllCars, 'seats-2');
  });

  it("Verify Filmstrip Navigation tours", () => {
    mainPage.checkContextInsideTours();
  });

  it("Verify Filmstrip Content Consistency on ACCOMMODATION", () => {
    mainPage.verifyContext(mainPage.seeAllAppartments, mainPage.firstAccommodation);
  });

  it("Verify Filmstrip Content Consistency for CARS", () => {
    mainPage.verifyContext(mainPage.seeAllCars, mainPage.firstCar);
  });

  it("Verify Filmstrip Content Consistency for TOURS", () => {
    mainPage.verifyContext(mainPage.seeAllTours, mainPage.firstTour);
  });

  it("Verify Filmstrip slick-arrow (right and left) changed the items for accommodation", () => {
    page.scrollAndClick(mainPage.containerForAppartment, mainPage.slickArrowAppartments("left"));
    mainPage.clickOnElement(mainPage.slickArrowAppartments("right"));
    cy.get(mainPage.slickArrowAppartments("right")).should('be.visible');
  });

  it("Verify Filmstrip slick-arrow(right and left) changed the items for cars", () => {
    page.scrollAndClick(mainPage.conteinerForCar, mainPage.slickArrowCars("left"));
    mainPage.clickOnElement(mainPage.slickArrowCars("right"));
    cy.get(mainPage.slickArrowCars("left")).should('be.visible');
  });

  it("Verify Filmstrip slick-arrow(right and left) changed the items for tours", () => {
    page.scrollAndClick(mainPage.containerForTours, mainPage.slickArrowTours("left"));
    mainPage.clickOnElement(mainPage.slickArrowTours("right"));
    cy.get(mainPage.slickArrowTours("right")).should('be.visible');
  });
});
