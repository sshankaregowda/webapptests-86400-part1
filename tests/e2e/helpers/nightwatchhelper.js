/**
 * nightwatchhelper.js contains common functions which operates on WebElement such as getTitle(), getText() etc...
 */

'use strict';

module.exports = {
  /**
   * Get the text from the Web Element using getValue() method.
   *
   * @param  {object} browser
   * @param  {(object|string)} element
   * @returns {Promise} Promise text from the Web Element using getValue() method.
   */
  getTextByValue: function (browser, element) {
    return new Promise((resolve, reject) => {
      try {
        browser.getValue(element, function (text) {
          resolve(text.value);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Get the text from the Web Element using getText() method.
   *
   * @param {object} browser
   * @param {(object|string)} element
   * @returns {Promise} Promise text from the Web Element using getText() method.
   */
  getText: function (browser, element) {
    return new Promise((resolve, reject) => {
      try {
        browser.getText(element, function (text) {
          resolve(text.value);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Get the attribute from the Web Element using getAttribute() method.
   *
   * @param {object} browser
   * @param {(object|string)} element
   * @returns {Promise} Promise text from the Web Element using getAttribute() method.
   */
  getAttribute: function (browser, element, attributeName) {
    return new Promise((resolve, reject) => {
      try {
        browser.getAttribute(element, attributeName, function (result) {
          resolve(result.value);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },


  /**
   * Check if the Web Element exists in the DOM.
   *
   * @param {object} browser
   * @param {string} element
   * @param {string} locator
   *
   * @returns {Promise} int -1 if element does not exist, otherwise element found.
   */
  elementPresent: function (browser, element, locator) {
    return new Promise((resolve, reject) => {
      try {
        browser.element(locator, element, (result) => {
          resolve(result.status);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Retrieve the page title from the current page.
   *
   * @param {object} browser
   * @returns {Promise} Promise the page title of the current page.
   */
  getPageTitle: function (browser) {
    return new Promise((resolve, reject) => {
      try {
        this.hardWait(browser);
        browser.getTitle(function (title) {
          resolve(title);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Check if Web Element is Enabled.
   *
   * @param {object} browser
   * @param {object} element
   * @returns {Promise} Promise true if element is enabled, otherwise false.
   */
  elementEnabled: function (browser, element) {
    return new Promise((resolve, reject) => {
      try {
        browser.elementIdEnabled(element.ELEMENT, function (result) {
          resolve(result.value);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Locate the Web Element in Web Page and Return the Web Element.
   *
   * @param {object} browser
   * @param {(object|string)} element
   * @param {string} locator
   * @returns {Promise} Promise the Web Element.
   */
  getWebElement: function (browser, element, locator) {
    return new Promise((resolve, reject) => {
      try {
        browser.element(locator, element, function (elem) {
          resolve(elem);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Locate the Web Elements in Web Page and Returns the set of Web Elements.
   *
   * @param {object} browser
   * @param {(object|string)} elements
   * @param {string} locator
   * @returns {Promise} Promise the Set of Web Elements.
   */
  getWebElements: function (browser, elements, locator) {
    return new Promise((resolve, reject) => {
      try {
        browser.elements(locator, elements, function (elems) {
          resolve(elems);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Check if Web Element (radio button/ check box) is selected.
   *
   * @param {object} browser
   * @param {object} element
   * @returns {Promise} Promise boolean true if Web Element is selected, otherwise false.
   */
  elementSelected: function (browser, element) {
    return new Promise((resolve, reject) => {
      try {
        browser.elementIdSelected(element.ELEMENT, function (result) {
          resolve(result.value);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Get the text of the Web Element.
   *
   * @param {object} browser
   * @param {object} element
   * @returns {Promise} Promise text value from the element.
   */
  elementText: function (browser, element) {
    return new Promise((resolve, reject) => {
      try {
        browser.elementIdText(element.ELEMENT, function (result) {
          resolve(result.value);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Get the attribute value of Web Element using attribute name.
   *
   * @param {object} browser
   * @param {object} element
   * @param {string} attributeName
   * @returns {Promise} Promise the attribute value by attribute name.
   */
  elementAttribute: function (browser, element, attributeName) {
    return new Promise((resolve, reject) => {
      try {
        browser.elementIdAttribute(element.ELEMENT, attributeName, function (result) {
          resolve(result.value);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Get the URL of the Current Page.
   *
   * @param {object} browser
   * @returns {Promise} Promise the URL of the Current Page.
   */
  getCurrentUrl: function (browser) {
    return new Promise((resolve, reject) => {
      try {
        browser.url(function (url) {
          resolve(url.value);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Check if Textbox is disabled.
   *
   * @param {object} browser
   * @param {object} element
   * @returns {Promise} Promise Check if Textbox is disabled.
   */
  elementDisabled: function (browser, element) {
    return new Promise((resolve, reject) => {
      try {
        browser.getAttribute(element, 'disabled', function (result) {
          resolve(result.value);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Checks if element is currently displayed.
   *
   * @param {object} browser
   * @param {object} element
   * @returns {Promise} int -1 if element does not exist, otherwise 0 for element found.
   */
  elementVisible: function (browser, element) {
    return new Promise((resolve, reject) => {
      try {
        browser.isVisible(element, function (result) {
          resolve(result.status);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Delete set of cookies from cookies array.
   *
   * @param {object} browser
   * @param {object} cookie
   */
  deleteCookie: function (browser, cookies) {
    try {
      for (const cookie of cookies) {
        browser.deleteCookie(cookie, function () {
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  },

  /**
   * Get the set of cookies from browser.
   *
   * @param {object} browser
   * @returns {Promise} Promise Set of cookies are returned.
   */
  getCookies: function (browser) {
    const cookiesArray = [];

    return new Promise((resolve, reject) => {
      try {
        browser.getCookies(function (cookies) {
          for (let i = 0; i < cookies.value.length; i++) {
            cookiesArray.push(cookies.value[i].name);
          }
          resolve(cookiesArray);
        });
      } catch (err) {
        console.error(err.message);
        reject(err);
      }
    });
  },

  /**
   * Timeout for async-await function.
   *
   * @param {number} delay
   * @returns {Promise} Promise makes the async-await function to wait for 2000ms.
   */
  timeOut: function (delay) {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay);
    });
  }
};
