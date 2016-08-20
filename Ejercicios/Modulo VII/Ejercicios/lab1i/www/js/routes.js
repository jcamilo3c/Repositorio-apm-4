angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('inicio', {
    url: '/page1',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('page1', {
    url: '/page2',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('page2', {
    url: '/page3',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page3', {
    url: '/page4',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});