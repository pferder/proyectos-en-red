(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name proyectosEnRedApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the proyectosEnRedApp
   */
  angular
    .module('proyectosEnRedApp')
    .controller('MainCtrl', ['$scope', '$state', MainCtrl])

  function MainCtrl($scope, $state) {

    $scope.user = firebase.auth().currentUser;

    if (!$scope.user) {
      $state.go('signin');
    }

    if (!$scope.user.photoUrl) {
      $scope.user.photoUrl = 'https://lh5.googleusercontent.com/-DHV7o3a3-Lw/AAAAAAAAAAI/AAAAAAAAAAA/n4jhgc_3x5g/s96/photo.jpg'
    }
  }

})();
