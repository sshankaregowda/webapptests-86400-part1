// Copyright 2019 BigTinCan Mobile Pty Ltd. All Rights Reserved.

/**
 * Checks if the given attribute of an element contains the expected value.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.attributeContains('#someElement', 'href', 'google.com');
 *    };
 * ```
 *
 * @method attributeContains
 * @param {string} selector
 * @param {string} attribute
 * @param {string} expected
 * @api assertions
 */

exports.assertion = function (selector, attribute, expected) {
  this.message = 'Testing if attribute ' + attribute + ' of element ' + selector.name + ' contains ' + expected;
  const MSG_ELEMENT_NOT_FOUND = `${this.message} Element could not be located.`;
  const MSG_ATTR_NOT_FOUND = `${this.message} Element does not have a ${attribute} attribute.`;

  this.expected = function () {
    return expected;
  };

  this.pass = function (value) {
    return value.indexOf(expected) > -1;
  };

  this.value = function (result) {
    return result.value;
  };

  this.failure = function (result) {
    const failed = (result === false) || (result && (result.status === -1 || result.value === null));

    if (failed) {
      let defaultMsg = MSG_ELEMENT_NOT_FOUND;

      if (result && result.value === null) {
        defaultMsg = MSG_ATTR_NOT_FOUND;
      }
      this.message = defaultMsg;
    }

    return failed;
  };

  this.command = function (callback) {
    return this.api.getAttribute(selector, attribute, callback);
  };
};
