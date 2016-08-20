angular.module('app.controllers', ['ngCordova']) /*Aqui llamo ngCordova (modular)*/
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaDevice',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDevice) { /*Agrego $cordovaDevice en todas las dependecias para que haga el llamado*/
	$scope.getDeviceInformation = function(){
		$scope.device = $cordovaDevice.getDevice();

    	$scope.cordova = $cordovaDevice.getCordova();

    	$scope.model = $cordovaDevice.getModel();

    	$scope.platform = $cordovaDevice.getPlatform();

    	$scope.uuid = $cordovaDevice.getUUID();

    	$scope.version = $cordovaDevice.getVersion();

    	console.log($scope.device, $scope.cordova, $scope.model, $scope.platform, $scope.uuid, $scope.version);
	}

}])  