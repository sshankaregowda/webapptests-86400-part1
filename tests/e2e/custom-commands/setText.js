/**
 * Clear and Pass the text to Web Element.
 *
 * @example
 * this.demoTest = function (browser, selector, text) {
 *    browser
 *      .clearValue(selector)
 *      .setValue(selector, text);
 * };
 *
 * @method SetText
 * @param {object} selector
 * @param {(string|number)} text
 * @api commands
 */

const EventEmitter = require('events');

class SetText extends EventEmitter {
  command(selector, text) {
    const api = this.client.api;

    try {
      api
        .clearValue(selector)
        .setValue(selector, text);
      console.info(' ---- Element is set with the text \"' + text + '\" ----\n');
    } catch (err) {
      console.error(err.message);
    }
    this.emit('complete');

    return this;
  }
}

module.exports = SetText;
