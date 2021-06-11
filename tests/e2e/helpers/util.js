/**
 * util.js contains common functions which can be used across all .js files.
 */

'use strict';

const fs = require('fs');

module.exports = {
  /**
   * Read JSON file and Return JSON data.
   *
   * @param {string} path
   * @return {object} Returns the JSON data from .json files.
   */
  readJsonFile: function (path) {
    let jsonData;

    try {
      const data = fs.readFileSync(path, 'utf8');
      jsonData = JSON.parse(data);
    } catch (err) {
      console.error(err.message);
    }

    return jsonData;
  },

  /**
   * Extract the string between two chararcters.
   *
   * @param {string} text
   * @return {string} Returns the extracted text between two characters.
   */
  getTextBetweenTwoChars: function (text) {
    let extractedText;

    try {
      extractedText = text.split('(').pop().split(')')[0];
    } catch (err) {
      console.error(err.message);
    }

    return extractedText;
  },

  /**
   * Convert the String to upper case.
   *
   * @param {string} text
   * @return {string} Returns the text which is converted to uppercase.
   */
  convertToUpperCase: function (text) {
    let upperCaseText;

    try {
      upperCaseText = text.toUpperCase();
    } catch (err) {
      console.error(err.message);
    }

    return upperCaseText;
  },

  /**
   * Checks if String is Empty.
   *
   * @param {string} text
   * @return {boolean} Returns true if text is null, empty or undefined, otherwise false.
   */
  isStringEmpty: function (text) {
    let result;

    try {
      result = !text;
    } catch (err) {
      console.error(err.message);
    }

    return result;
  },

  /**
   * Checks if String has a number.
   *
   * @param {string} text
   * @return {boolean} Returns true if string has a number, otherwise false.
   */
  hasNumber: function (text) {
    let result;

    try {
      result = /\d/.test(text);
    } catch (err) {
      console.error(err.message);
    }

    return result;
  },

  /**
   * Checks if String has a particular word.
   *
   * @param {string} text
   * @param {string} word
   * @return {boolean} Returns true if string has a particular word, otherwise false.
   */
  hasWord: function (text, word) {
    try {
      const position = text.search(word);

      if (position > -1) {
        return true;
      }
    } catch (err) {
      console.error(err.message);
    }
    return false;
  },

  /**
   * Obtain element next to specified element in an array.
   *
   * @param {string} text
   * @param {string} word
   * @return {boolean} Returns arrayElement next to specified element in an array.
   */
  getArrayElement: function (array, element) {
    let arrayElement;

    try {
      arrayElement = array.slice(array.indexOf(element) + 1, array.indexOf(element) + 2);
    } catch (err) {
      console.error(err.message);
    }

    return arrayElement;
  },

  /**
   * Extract the text before the character '\n'.
   *
   * @param {object} browser
   */
  getTextBeforeCharacter: function (browser, text) {
    let extractedText;

    try {
      extractedText = text.substr(0, text.indexOf('\n'));
    } catch (err) {
      console.error(err.message);
    }

    return extractedText;
  },

  /**
   * Get the today's date in format dd.
   *
   * @param {object} browser
   * @return {string} Returns today's date
   */
  getTodayDate: function () {
    let date;

    try {
      const today = new Date();
      date = String(today.getDate()).padStart(2, '0');
    } catch (err) {
      console.error(err.message);
    }

    return date;
  },

  /**
   * Throw error message when required.
   *
   * @param {string} errMsg
   */
  throwError: function (errMsg) {
    throw new Error(errMsg);
  }
};
