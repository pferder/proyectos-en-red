(function() {
  'use strict';

  angular
    .module('proyectosEnRedApp')
    .factory('Projects', ['$firebaseArray', Projects])

  function Projects($firebaseArray) {
    var self = this;

    self.get = function() {
      var projectsRef = firebase.database().ref('projects/');
      return $firebaseArray(projectsRef);
    }

    self.set = function(project) {

      var newProjectKey = firebase.database().ref().child('projects').push().key;

      var updates = {};
      updates['/projects/' + newProjectKey] = project;

      return firebase.database().ref().update(updates);
    }

    return self;
  }
})();
