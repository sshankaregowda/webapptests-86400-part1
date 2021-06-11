// global.js is used to configure the hooks globally and are run before and after test suites and test cases.
import nw from './nightwatch.json';

const dotenv = require('dotenv');
const fs = require('fs');
const handlebars = require('handlebars');
const mkdirp = require('mkdirp');
const path = require('path');

let env;

module.exports = {
  environment: undefined,
  /**
   * Runs before the first test case in test suite.
   *
   * @param {function} done
   */
  before: function (browser, done) {
    const args = process.argv;
    const currentDir = process.cwd();

    // Loads the environment file dynamically based on --env variable passed in command line
    dotenv.config({ path: '' + currentDir + '\/' + '.env.' + module.exports.getEnvironment() });

    // Console prints which environment is currently running
    function parseArgumentsAndGetEnv(commandLineArgs) {
      const userSpecifiedEnvironment = module.exports.getEnvironment();

      const currentEnvironment = commandLineArgs.find(function (commandLineArg) {
        return commandLineArg === String(userSpecifiedEnvironment);
      });
      return currentEnvironment;
    }

    this.environment = parseArgumentsAndGetEnv(args);

    if (typeof this.environment === 'undefined') {
      Object.keys(nw.test_settings).filter(function (test) {
        if (test === 'default') {
          console.info('Running on: ' + nw.test_settings[test].launch_url.split('//').pop().split(':')[0] + ' with port number ' + nw.test_settings[test].launch_url.match(/\d+/)[0] + '...................');
        }

        return;
      });
    } else {
      console.info('Running on: ' + this.environment + ' ..............');
    }

    // clean up reports, screenshots and logs folder.
    module.exports.deleteFolder(currentDir + '/reports/');
    module.exports.deleteFolder(currentDir + '/screenshots/');
    module.exports.deleteFolder(currentDir + '/logs/');

    done();
  },

  /**
   * Runs before each test case in test suite.
   *
   * @param {object} browser
   * @param {function} done
   */
  beforeEach: function (browser, done) {
    done();
  },

  /**
   * Runs after each test case in test suite.
   *
   * @param {object} browser
   * @param {function} done
   */
  afterEach: function (browser, done) {
    done();
  },

  /**
   * Runs after last test case in test suite.
   *
   * @param {object} browser
   * @param {function} done
   */
  after: function (browser, done) {
    done();
  },

  /**
   * Get the user specified environment in command line.
   *
   * @return {string} Returns the user specified environment from the command line.
   */
  getEnvironment: function () {
    const args = process.argv;
    env = 'local';

    if (args.includes('--env')) {
      env = args.slice(args.indexOf('--env') + 1, args.indexOf('--env') + 2);
    }

    return env;
  },

  /**
   * Reporter function which generates the HTML reports for test results.
   *
   * @param {object} results
   * @param {function} done
   */
  reporter: function (results, done) {
    const moduleName = Object.keys(results.modules)[0];
    const directoryName = moduleName.substr(0, moduleName.indexOf('/'));
    const userSpecifiedEnv = module.exports.getEnvironment();
    const reportPrefix = results.modules[Object.keys(results.modules)[0]].reportPrefix;
    const todayDate = new Date().toDateString().replace(/ /g, '_');
    const reportFilename = reportPrefix + userSpecifiedEnv + '_' + todayDate + '.html';

    // create the reports folder.
    mkdirp(process.cwd() + '/reports/' + directoryName, function (err) {
      if (err) {
        console.error(err);
      }
    });

    const reportFilePath = path.join(__dirname, 'reports/' + directoryName, reportFilename);

    // read the html template
    fs.readFile('html-reporter.hbs', function (err, data) {
      if (err) throw err;

      const template = data.toString();

      // merge the template with the test results data
      const html = handlebars.compile(template)({
        results: results,
        timestamp: new Date().toString(),
        browser: results.modules[Object.keys(results.modules)[0]].reportPrefix.split('_').join(' '),
      });

      // write the html to a file
      fs.writeFile(reportFilePath, html, function (error) {
        if (error) throw error;
        console.log('Report generated: ' + reportFilePath);
        done();
      });
    });
  },

  /**
   * Deletes the directory and its files.
   *
   * @param {string} dirpath
   */
  deleteFolder: function (dirpath) {
    if (fs.existsSync(dirpath)) {
      fs.readdirSync(dirpath).forEach(function (file) {
        const curPath = dirpath + '/' + file;

        if (fs.lstatSync(curPath).isDirectory()) {
          module.exports.deleteFolder(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });

      fs.rmdirSync(dirpath);
    }
  }
};
