(function() {
  'use strict';

  angular
    .module('proyectosEnRedApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/main');

      $stateProvider
        .state('signin', {
          url: '/signin',
          templateUrl: 'signin/signin.html',
          controller: 'SigninCtrl',
        })
        .state('main', {
          url: '/main',
          templateUrl: 'main/main.html',
          controller: 'MainCtrl',
        })
        .state('projects', {
          url: '/projects',
          templateUrl: 'projects/projects.html',
          controller: 'ProjectsCtrl',
        })
        .state('new-project', {
          url: '/projects/new',
          templateUrl: 'projects/new-project/new-project.html',
          controller: 'NewProjectCtrl',
        })
    });
})();
