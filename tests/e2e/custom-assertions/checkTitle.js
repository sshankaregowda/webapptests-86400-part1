/**
 * Checks if the page title contains the given value.
 *
 * ```
 *    this.demoTest = function (browser) {
 *      browser.assert.title("Nightwatch.js");
 *    };
 * ```
 *
 * @method title
 * @param {string} expectedTitle
 * @api assertions
 */

exports.assertion = function (expectedTitle) {
  this.message = `Testing if page title contains ${expectedTitle}`;

  /**
   * A value to perform the assertion on.
   *
   * @return {string} Returns the expected title to perform the assertion.
   */
  this.expected = function () {
    return expectedTitle;
  };

  /**
   * This method which performs the actual assertion. It is
   * called with the result of the value method as the argument.
   *
   * @param {string} value
   * @return {boolean} Returns true if expected title matches with actual title, otherwise false.
   */
  this.pass = function (value) {
    return value.indexOf(expectedTitle) > -1;
  };

  /**
   * This method returns the value to be used on the
   * assertion. It is called with the result of the command's
   * callback as argument.
   *
   * @param {string} result
   * @return {string} Returns the value to the assertion method.
   */
  this.value = function (result = {}) {
    return result.value || '';
  };

  /**
   * Performs a protocol command/action and its result is
   * passed to the value method via the callback argument.
   *
   * @param {function} callback
   * @return {string} Returns the title of the current page to value method.
   */
  this.command = function (callback) {
    return this.api.title(callback);
  };
};
