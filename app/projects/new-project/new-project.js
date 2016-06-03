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
    .controller('NewProjectCtrl', ['$scope', '$state', 'Projects', NewProjectCtrl])

  function NewProjectCtrl($scope, $state, Projects) {
    $scope.user = firebase.auth().currentUser;

    if (!$scope.user) {
      $state.go('signin');
    }

    $scope.tags = ['Afiliaciones', 'Comunicación', 'Financiamiento', 'Organización', 'Plataformas', 'Territorio'];

    $scope.save = function() {
        var project = {
            createdBy: {
                uid: $scope.user.uid,
                displayName: $scope.user.displayName,
                email: $scope.user.email
            },
            timestamp: +new Date().getTime(),
            name: $scope.name,
            desc: $scope.desc,
            tags: $scope.selectedTags
        }

        Projects.set(project);
        $state.go('projects');
    }

  }

})();
