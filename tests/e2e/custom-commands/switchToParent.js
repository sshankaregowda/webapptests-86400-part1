/**
 * Switch from the child window back to parent window.
 *
 * @example
 * this.demoTest = function (browser) {
 *   browser.windowHandles(function (result) {
 *   const originalWindowHandle = result.value[0];
 *   browser.switchWindow(originalWindowHandle);
 * });
 *
 *
 * @method SwitchToParentWindow
 * @api commands
 */

const EventEmitter = require('events');

class SwitchToParentWindow extends EventEmitter {
  command() {
    const api = this.client.api;

    try {
      api.windowHandles(function (result) {
        const originalWindowHandle = result.value[0];
        api.switchWindow(originalWindowHandle);
      });
      console.info(' ---- Switched to Parent window ----\n');
    } catch (err) {
      console.error(err.message);
    }
    this.emit('complete');

    return this;
  }
}

module.exports = SwitchToParentWindow;
