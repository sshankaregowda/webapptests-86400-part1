/**
 * Suspends the test for the given time in milliseconds.
 *
 * @example
 * this.demoTest = function (browser) {
 *   browser.pause(3000);
 *   // or suspend indefinitely
 *   browser.pause();
 * };
 *
 * @method Pause
 * @api commands
 */


const EventEmitter = require('events');

class Pause extends EventEmitter {
  command() {
    const api = this.client.api;

    try {
      api.pause(3000);
      console.info(' ---- Halt the script for 3secs ----\n');
    } catch (err) {
      console.error(err.message);
    }
    this.emit('complete');

    return this;
  }
}

module.exports = Pause;
