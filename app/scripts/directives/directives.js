(function() {
  'use strict';

  angular
    .module('proyectosEnRedApp')
    .directive('navBar', function($state) {
      return {
        restrict: 'E',
        templateUrl: 'scripts/directives/nav-bar.html',
        link: function(scope, elem, attrs) {
          var ul = elem[0].children[0].children[0].children[0].children[1].children[0];
          for (var i = 0; i < ul.children.length; i++) {
            if (ul.children[i].attributes[0].value == ('nav-' + $state.current.name)) {
              ul.children[i].className = 'active';
            }
          }
        }
      }
    })
    .directive('footer', function() {
      return {
        restrict: 'E',
        templateUrl: 'scripts/directives/footer.html'
      }
    })
})();
