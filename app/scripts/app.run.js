(function() {
  'use strict';

  angular
    .module('proyectosEnRedApp')
    .run(function($rootScope, $state) {

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyDxeQhlipVOKNxCmhsgi4Lb36SDUEEmxaY",
        authDomain: "proyectos-en-red.firebaseapp.com",
        databaseURL: "https://proyectos-en-red.firebaseio.com",
        storageBucket: "proyectos-en-red.appspot.com",
      };

      // FirebaseUI config.
      var uiConfig = {
        'signInSuccessUrl': '#/main',
        'signInOptions': [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        'tosUrl': '<your-tos-url>',
      };

      var app = firebase.initializeApp(config);
      var auth = app.auth();
      var ui = new firebaseui.auth.AuthUI(auth);
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);

      $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
          $state.current = toState;
        }
      )

    });
})();
