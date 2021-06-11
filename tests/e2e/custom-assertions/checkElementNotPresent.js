/**
 * Checks if the given element does not exists in the DOM.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.elementNotPresent(".should_not_exist");
 *    };
 * ```
 *
 * @method elementNotPresent
 * @param {string} selector The selector (CSS / Xpath) used to locate the element.
 * @api assertions
 */
exports.assertion = function (selector) {
  this.message = 'Testing if element ' + selector + ' is not present';

  this.expected = 'not present';

  this.pass = function (value) {
    return value === 'not present';
  };

  this.value = function (result) {
    return (result.status !== 0 || result.value.length === 0) ? 'not present' : 'present';
  };

  this.command = function (callback) {
    return this.api.elements(this.client.locateStrategy, selector, callback);
  };
};
