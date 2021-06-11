/**
 * ebayTest.js contains tests to search for mazda cars and verify if cars are listed
 */

'use strict';

let ebayHomePage;
let ebayResultsPage;

module.exports = {
  /**
   * Runs before first test case to launch ebay and creating page reference to access the required pages.
   *
   * @param {object} browser
   */
  before: function (browser) {
    ebayHomePage = browser.page.ebay.homePage();
    ebayResultsPage = browser.page.ebay.resultsPage();
    ebayHomePage.navigate();
  },

  /**
   * Navigate to ebay home page and Verify the ebay home page title.
   *
   */
  '@tags': ['login'],
  'Should have correct ebay page title': function () {
    ebayHomePage.assert.checkTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    ebayHomePage.takeScreenshot('should-have-title-Electronics, Cars, Fashion, Collectibles & More | eBay');
  },

  /**
   * Login and Logout from webapp as a cloud user for AU/UK/US server.
   *
   * @param {object} browser
   */
  'Should be able to search for mazda car and verify if mazda cars are listed': function (browser) {
    ebayHomePage.assert.checkElementPresent(ebayHomePage.elements.searchTxtbox);
    ebayHomePage.searchForCars(browser, 'mazda cars');
    ebayResultsPage.assert.checkElementPresent(ebayResultsPage.elements.carListings);
    ebayResultsPage.takeScreenshot('Should be able to search for mazda car and verify if mazda cars are listed');
    ebayResultsPage.assert.checkElementPresent(ebayResultsPage.elements.selectCar);
    ebayResultsPage.assert.checkContainsText(ebayResultsPage.elements.selectCar, 'Mazda CX-5 2014');
  },

  /**
   * Runs after all test cases to close the Appnext.
   *
   * @param {object} browser
   */
  after: function (browser) {
    browser.end();
  }
};
