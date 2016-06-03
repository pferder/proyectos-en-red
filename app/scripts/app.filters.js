(function() {
  'use strict';

  angular
    .module('proyectosEnRedApp')
    .filter('selectedTags', selectedTags)

  function selectedTags() {
    return function(data, selected) {

      if (data) {
        var arr = [];
        for (var i = 0; i < data.length; i++) {
          var pushed = false;
          for (var j = 0; j < selected.length; j++) {
            if (pushed) {
              break;
            } else {
              for (var k = 0; k < data[i].tags.length; k++) {
                if (data[i].tags[k] == selected[j]) {
                  arr.push(data[i]);
                  pushed = true;
                  break;
                }
              }
            }
          }
        }

        return arr;
      } else {
        return null;
      }
    }
  }
})();
