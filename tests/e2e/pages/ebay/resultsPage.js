/**
 * resultsPage.js is used to declare all the Web Elements and functions of ebay car Results page.
 */

 'use strict';

 import log4js from '../../../../log4js/log4jsConfig';
 import nightwatchhelper from '../../helpers/nightwatchhelper';
 import util from '../../helpers/util';
 
 
 const loginCommands = {
   /**
    * Select mazda car from the list
    *
    * @param {object} browser
    * @param {string} role
    */
   selectCar: function (browser) {
     const selectCar = module.exports.elements.selectCar;
 
     browser
       .waitForPageLoad()
       .waitForElementVisibility(selectCar);
 
     nightwatchhelper.getCookies(browser).then(function (cookies) {
       nightwatchhelper.deleteCookie(browser, ...[cookies]);
     });
 
 
     log4js.logging().info(' ***** Select Mazda car from the list *****\n');
 
     
       browser
         .clickElement(selectCar, 'xpath')
         .setDelay(5000);
 
     
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
     carListings: {
       selector: '//span[@class="srp-format-tabs-h2"]',
       locateStrategy: 'xpath'
     },
     selectCar: {
       selector: '//div[@id="srp-river-results"]/ul/li/div/div[2]/a[@class="s-item__link"]/h3',
       locateStrategy: 'xpath'
     }
   }
 };
 