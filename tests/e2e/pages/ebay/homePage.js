/**
 * homePage.js is used to declare all the Web Elements and functions of ebay Home page.
 */

'use strict';

import log4js from '../../../../log4js/log4jsConfig';
import nightwatchhelper from '../../helpers/nightwatchhelper';
import util from '../../helpers/util';


const loginCommands = {
  /**
   * Navigate to ebay home page and search for mazda cars
   *
   * @param {object} browser
   * @param {string} carName
   */
  searchForCars: function (browser, carName) {
    const args = process.argv;
    const searchBox = module.exports.elements.searchTxtbox;

    browser
      .waitForPageLoad()
      .waitForElementVisibility(searchBox);

    nightwatchhelper.getCookies(browser).then(function (cookies) {
      nightwatchhelper.deleteCookie(browser, ...[cookies]);
    });

    browser
      .refreshPage()
      .waitForElementVisibility(searchBox);

    log4js.logging().info(' ***** Search for Mazda cars *****\n');

    
      browser
        .setText(searchBox, carName)
        .clickElement(module.exports.elements.navBar, 'xpath');

    browser
      .clickElement(module.exports.elements.searchBtn, 'xpath');
  }

};

/**
 * Declare the Web Elements.
 */
module.exports = {
  commands: [loginCommands],
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
    title: {
      selector: 'title'
    },
    searchTxtbox: {
      selector: 'input[name=_nkw]'
    },
    navBar: {
      selector: '//li[@class="hl-cat-nav__active"]'
    },
    searchBtn: {
      selector: '//input[@type="submit"]',
      locateStrategy: 'xpath'
    }
  }
};
