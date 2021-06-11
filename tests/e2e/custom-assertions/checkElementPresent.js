// Copyright 2019 BigTinCan Mobile Pty Ltd. All Rights Reserved.

/**
 * Checks if the given element exists in the DOM.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.elementPresent("#main");
 *    };
 * ```
 *
 * @method elementPresent
 * @param {string} selector
 * @api assertions
 */

exports.assertion = function (selector) {
  this.message = 'Testing if element ' + selector.name + ' is present';
  const MSG_ELEMENT_NOT_FOUND = `${this.message} but element could not be located.`;

  this.expected = 'present';

  this.pass = function (value) {
    return value === 'present';
  };

  this.value = function (result) {
    return (result.status !== 0 || result.value.length === 0) ? 'not present' : 'present';
  };

  this.failure = function (result) {
    const failed = (result === false) || (result && (result.status === -1 || result.value === null));

    if (failed) {
      this.message = MSG_ELEMENT_NOT_FOUND;
    }

    return failed;
  };

  this.command = function (callback) {
    return this.api.element(this.client.locateStrategy, selector, callback);
  };
};
