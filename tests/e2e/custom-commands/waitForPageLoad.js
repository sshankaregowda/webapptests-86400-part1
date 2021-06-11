/**
 * Waits until the page is loaded fully within 5000ms.
 *
 * @example
 * this.demoTest = function (browser) {
 *    browser.waitForElementVisible('body', 5000);
 * };
 *
 * @method WaitForElementVisibility
 * @api commands
 */

const EventEmitter = require('events');

class WaitForPageLoad extends EventEmitter {
  command() {
    const api = this.client.api;

    try {
      api.waitForElementVisible('body', 5000);
      console.info(' ---- Page loaded within 5secs ----\n');
    } catch (err) {
      console.error(err.message);
    }
    this.emit('complete');

    return this;
  }
}

module.exports = WaitForPageLoad;
