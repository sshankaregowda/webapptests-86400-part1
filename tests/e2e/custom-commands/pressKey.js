/**
 * Press the specified key from keyboard.
 *
 * @example
 * this.demoTest = function (browser) {
 *    browser.keys('\uE007');
 * };
 *
 * @method PressKey
 * @param {string} key
 * @api commands
 */

const util = require('util');
const EventEmitter = require('events');

function PressKey() {
  EventEmitter.call(this);
}

util.inherits(PressKey, EventEmitter);

PressKey.prototype.command = function (key) {
  const api = this.client.api;

  try {
    switch (key) {
      case 'ENTER':
        api.keys('\uE007');
        console.info(' ---- ENTER key is pressed ----\n');
        break;

      case 'TAB':
        api.keys('\uE004');
        console.info(' ---- TAB key is pressed ----\n');
        break;

      case 'SHIFT':
        api.keys('\uE008');
        console.info(' ---- SHIFT key is pressed ----\n');
        break;

      default:
        console.info('No key is matching');
    }
  } catch (err) {
    console.error(err.message);
  }
  this.emit('complete');

  return this;
};

module.exports = PressKey;
