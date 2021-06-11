/**
 * Refresh the browser.
 *
 * @example
 * this.demoTest = function (browser) {
 *    browser.refresh();
 * };
 *
 * @method Refresh
 * @api commands
 */

const EventEmitter = require('events');

class Refresh extends EventEmitter {
  command() {
    const api = this.client.api;

    try {
      api.refresh();
      console.info(' ---- Page is refreshed ----\n');
    } catch (err) {
      console.error(err.message);
    }
    this.emit('complete');

    return this;
  }
}

module.exports = Refresh;
