/**
 * Click the Web Element using elementIdClick() method.
 *
 * @example
 * this.demoTest = function (browser, element) {
 *    browser.elementIdClick(element.ELEMENT);
 * };
 *
 * @method Click
 * @param {object} element
 * @api commands
 */

const util = require('util');
const EventEmitter = require('events');

function Click() {
  EventEmitter.call(this);
}

util.inherits(Click, EventEmitter);

Click.prototype.command = function (element) {
  const api = this.client.api;

  try {
    api.elementIdClick(element.ELEMENT);
    console.info(' ---- Element is clicked using webdriver IO ----\n');
  } catch (err) {
    console.error(err.message);
  }
  this.emit('complete');

  return this;
};

module.exports = Click;
