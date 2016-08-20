angular.module('pcordova', ['ngRoute', 'pcordova.controllers'])/*de izquierda a derecha, los elementos de angular primero*/

.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider

	.when('/index', {
		templateUrl: "www/index.html",
		controller: 'countriesCtrl'
	})
	
	.otherwise({
	    templateUrl: 'index.html',
	    controller: 'countriesCtrl'
	});
 }]);