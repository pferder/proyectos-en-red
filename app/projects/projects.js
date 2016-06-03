(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name proyectosEnRedApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the proyectosEnRedApp
   */
  angular.module('proyectosEnRedApp')
    .controller('ProjectsCtrl', ['$scope', '$state', 'Projects', ProjectsCtrl])

  function ProjectsCtrl($scope, $state, Projects) {
    $scope.user = firebase.auth().currentUser;

    if (!$scope.user) {
      $state.go('signin');
    }

    $scope.tags = ['Afiliaciones', 'Comunicación', 'Financiamiento', 'Organización', 'Plataformas', 'Territorio'];
    $scope.tagFilter = $scope.tags;

    $scope.projects = Projects.get();

  }
})();
