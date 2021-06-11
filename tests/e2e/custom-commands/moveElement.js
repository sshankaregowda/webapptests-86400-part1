/**
 * Move to the specified element.
 *
 * @example
 * this.demoTest = function (browser, selector) {
 *    browser.moveToElement(selector, 50, 50);
 * };
 *
 * @method MoveToElement
 * @param {object} selector
 * @api commands
 */

const util = require('util');
const EventEmitter = require('events');

function MoveToElement() {
  EventEmitter.call(this);
}

util.inherits(MoveToElement, EventEmitter);

MoveToElement.prototype.command = function (selector) {
  const api = this.client.api;

  try {
    api.moveToElement(selector, 50, 50);
    console.info(' ---- Cursor is moved to the element position (50, 50) ----\n');
  } catch (err) {
    console.error(err.message);
  }
  this.emit('complete');

  return this;
};

module.exports = MoveToElement;
