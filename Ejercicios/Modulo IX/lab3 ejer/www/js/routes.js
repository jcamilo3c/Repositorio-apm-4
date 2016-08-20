angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.listado', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listado.html',
        controller: 'listadoCtrl'
      }
    }
  })

  .state('menu.detalle', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detalle.html',
        controller: 'detalleCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.formulario', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/formulario.html',
        controller: 'formularioCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});