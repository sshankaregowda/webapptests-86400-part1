/**
 * Suspends the test for the given time in milliseconds.
 *
 * @example
 * this.demoTest = function (browser, ms) {
 *   browser.pause(ms);
 *   // or suspend indefinitely
 *   browser.pause();
 * };
 *
 * @method Pause
 * @param {number} ms
 * @api commands
 */

const EventEmitter = require('events');

class Pause extends EventEmitter {
  command(ms) {
    const api = this.client.api;

    try {
      api.pause(ms);
      console.info(' ---- Halt the script for ' + ms + ' secs ----\n');
    } catch (err) {
      console.error(err.message);
    }
    this.emit('complete');

    return this;
  }
}

module.exports = Pause;
