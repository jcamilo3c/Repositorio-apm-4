angular.module('initial_spi.controllers', [])

.controller('mobileController', function($scope, $http){
	var url = "js/data_mobile.json";
	$http.get(url).success(function(response){

		console.log(response);
		$scope.mobile_message = response;
	});
})

.controller('smartphoneController', function($scope, $http){
	var url = "js/data_smartphone.json";
	$http.get(url).success(function(response){

		console.log(response);
		$scope.smartphone_message = response;
	});
})

.controller('studentController', function($scope){
	$scope.reset = function(){
		$scope.firstName = 'Alejandro';
		$scope.lastName = 'Romero',
		$scope.email = "alejo8591@gmail.com";
		$scope.age = 18;
	}

	$scope.reset();
});