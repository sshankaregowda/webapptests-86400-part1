/**
 * Waits until the Web Element is visible within 5000ms.
 *
 * @example
 * this.demoTest = function (browser, selector) {
 *    browser.waitForElementVisible(selector, 5000);
 * };
 *
 * @method WaitForElementVisibility
 * @param {object} selector
 * @api commands
 */

const EventEmitter = require('events');

class WaitForElementVisibility extends EventEmitter {
  command(selector) {
    const api = this.client.api;

    try {
      api.waitForElementVisible(selector, 5000);
      console.info(' ---- Element is visibe within 5secs ----\n');
    } catch (err) {
      console.error(err.message);
    }
    this.emit('complete');

    return this;
  }
}

module.exports = WaitForElementVisibility;
