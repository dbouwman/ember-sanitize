/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sanitize',

  included: function(app /* parentAddon */) {
    app.import('vendor/sanitize.js/sanitize.js');
  }

};
