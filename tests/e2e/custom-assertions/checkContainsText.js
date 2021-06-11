/**
 * Checks if the given element contains the specified text.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.containsText('#main', 'The Night Watch');
 *    };
 * ```
 *
 * @method containsText
 * @param {string} selector
 * @param {string} expectedText
 * @api assertions
 */

exports.assertion = function (selector, expectedText) {
  this.message = 'Testing if element ' + selector.name + ' contains text ' + expectedText;
  const MSG_ELEMENT_NOT_FOUND = `${this.message} but element could not be located`;

  this.expected = function () {
    return expectedText;
  };

  this.pass = function (value) {
    return value === expectedText;
  };

  this.value = function (result) {
    return result.value;
  };

  this.failure = function (result) {
    const failed = (result === false) || (result && (result.status === -1 || result.value === null));

    if (failed) {
      this.message = MSG_ELEMENT_NOT_FOUND;
    }

    return failed;
  };

  this.command = function (callback) {
    return this.api.getText(selector, callback);
  };
};
