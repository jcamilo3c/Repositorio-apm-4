angular.module('pcordova.controllers', [])

.controller('countriesCtrl', function($scope, $http){
	var url = "http://services.groupkt.com/country/get/all";
	$http.get(url).success(function(response){

		console.log(response);
		$scope.countries = response.RestResponse.result;
	});
});