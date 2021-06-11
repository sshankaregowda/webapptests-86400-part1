/**
 * Click the Web Element either using XPATH or CSS.
 *
 * @example
 * this.demoTest = function (browser, selector) {
 *    browser.click(selector);
 * };
 *
 * @method Click
 * @param {(object|string)} selector
 * @param {string} locator
 * @api commands
 */

const EventEmitter = require('events');

class Click extends EventEmitter {
  command(selector, locator) {
    const api = this.client.api;

    try {
      switch (locator) {
        case 'xpath':
          api
            .useXpath()
            .click(selector);
          console.info(' ---- Element is clicked using xpath locate strategy ----\n');
          break;

        case 'css':
          api
            .useCss()
            .click(selector);
          console.info('Element is clicked using css locate strategy');
          break;

        default:
          console.info('No locator specified');
      }
    } catch (err) {
      console.error(err.message);
    }
    this.emit('complete');

    return this;
  }
}

module.exports = Click;
