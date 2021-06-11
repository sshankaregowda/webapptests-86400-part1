/**
 * Takes screenshot for the testcase.
 *
 * @example
 * this.demoTest = function (browser) {
 *   browser.saveScreenshot('./screenshots/screenshot_unique_name.png');
 * };
 *
 * @method SaveScreenshot
 * @param {string} moduleName
 * @param {string} screenshotName
 * @api commands
 */
const EventEmitter = require('events');

class SaveScreenshot extends EventEmitter {
  command(screenshotName) {
    const api = this.client.api;
    const SCREENSHOT_PATH = './screenshots/';
    const todayDate = String(new Date()).replace(/ /g, '-');

    try {
      const capabilities = api.options.desiredCapabilities;
      api.saveScreenshot('' + SCREENSHOT_PATH + capabilities.name.toLowerCase() + '/' + capabilities.browserName + '-' + screenshotName + '-' + todayDate + '.png');
    } catch (err) {
      console.error(err.message);
    }
    this.emit('complete');

    return this;
  }
}

module.exports = SaveScreenshot;
