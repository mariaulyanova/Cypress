export default new class Page {
  refreshButton = "div a img[src='https://irent.am/storage/settings/May2019/wFaI6ka81nZoy2S3PruX.jpg']";

  open(url = '') {
    cy.visit(`https://irent.am/${url}`);
  };

  scrollAndClick(scrollTo, clickTo) {
    cy.get(scrollTo).scrollIntoView();
    cy.get(clickTo).click();
  };

  dropDownMenu(path, choosePosition) {
    cy.get(path).click();
    cy.get(choosePosition).click();
  };
}
