(function (window) {

  'use strict';

  var App = window.App;
  var firebasedatastore = App.firebasedatastore;
  var datastore = new firebasedatastore('http://personality-quiz-projec.firebaseapp.com');

  window.App = App;
})(window);
