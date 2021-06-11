/**
 * Waits until the Web Element is present within 5000ms.
 *
 * @example
 * this.demoTest = function (browser, selector) {
 *    browser.waitForElementPresent(selector, 5000);
 * };
 *
 * @method WaitForElementPresent
 * @param {object} selector
 * @api commands
 */

const util = require('util');
const EventEmitter = require('events');

function WaitForElementPresent() {
  EventEmitter.call(this);
}

util.inherits(WaitForElementPresent, EventEmitter);

WaitForElementPresent.prototype.command = function (selector) {
  const api = this.client.api;

  try {
    api.waitForElementPresent(selector, 5000);
    console.info(' ---- Element is present within 5secs ----\n');
  } catch (err) {
    console.error(err.message);
  }
  this.emit('complete');

  return this;
};

module.exports = WaitForElementPresent;
