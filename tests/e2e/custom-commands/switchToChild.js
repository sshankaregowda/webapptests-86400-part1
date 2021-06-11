/**
 * Switch to the child window from parent window.
 *
 * @example
 * this.demoTest = function (browser) {
 *   browser.windowHandles(function (result) {
 *   const popUpWindowHandle = result.value[1];
 *   browser.switchWindow(popUpWindowHandle);
 * });
 *
 *
 * @method SwitchToChildWindow
 * @api commands
 */

const EventEmitter = require('events');

class SwitchToChildWindow extends EventEmitter {
  command() {
    const api = this.client.api;

    try {
      api.windowHandles(function (result) {
        const popUpWindowHandle = result.value[1];
        api.switchWindow(popUpWindowHandle);
      });
      console.info(' ---- Switched to child window ----\n');
    } catch (err) {
      console.error(err.message);
    }
    this.emit('complete');

    return this;
  }
}

module.exports = SwitchToChildWindow;
