(function() {
  'use strict';

  angular
    .module('proyectosEnRedApp')
    .filter('selectedTags', selectedTags)
    .filter('cut', cut)

  function cut() {
    return function(value, max) {
      if (!value) return '';

      max = parseInt(max, 10);
      if (!max) return value;
      if (value.length <= max) return value;

      value = value.substr(0, max);
      var lastspace = value.lastIndexOf(' ');
      if (lastspace != -1) {
        //Also remove . and , so its gives a cleaner result.
        if (value.charAt(lastspace - 1) == '.' || value.charAt(lastspace - 1) == ',') {
          lastspace = lastspace - 1;
        }
        value = value.substr(0, lastspace);
      }


      return value + '…';
    }
  }

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
