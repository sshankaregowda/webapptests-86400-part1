/**
 * gruntfile.js is used to watch the file for any changes/update done to the file content.
 */

'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      w1: {
        files: ['tests/e2e/**/*.js']
      }
    }
  });

  grunt.registerTask('default', ['watch']);
};
