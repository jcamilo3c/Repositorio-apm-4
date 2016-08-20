angular.module('app.controllers', ['ngCordova'])
  
.controller('deviceCtrl', ['$scope', '$stateParams', '$cordovaDevice', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDevice) {
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
   
.controller('deviceMotionCtrl', ['$scope', '$stateParams', '$cordovaDeviceMotion', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceMotion) {
	$scope.getCurrentDeviceMotion = function(){
		$cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
		      $scope.x = result.x;
		      $scope.y = result.y;
		      $scope.z = result.z;
		      $scope.timeStamp = result.timestamp;
	    }, function(err) {
	      // An error occurred. Show a message to the user
	    });
	}


}])
   
.controller('deviceOrientationCtrl', ['$scope', '$stateParams', '$cordovaDeviceOrientation', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDeviceOrientation) {
	$cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
       var magneticHeading = result.magneticHeading;
       var trueHeading = result.trueHeading;
       var accuracy = result.headingAccuracy;
       var timeStamp = result.timestamp;
    }, function(err) {
      // An error occurred
    });



    var options = {
      frequency: 3000,
      filter: true     // if frequency is set, filter is ignored
    }

    var watch = $cordovaDeviceOrientation.watchHeading(options).then(
      null,
      function(error) {
        // An error occurred
      },
      function(result) {   // updates constantly (depending on frequency value)
        var magneticHeading = result.magneticHeading;
        var trueHeading = result.trueHeading;
        var accuracy = result.headingAccuracy;
        var timeStamp = result.timestamp;
      });


    watch.clearWatch();
    // OR
    $cordovaDeviceOrientation.clearWatch(watch)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred
      });


}])
      
.controller('networkCtrl', ['$scope', '$stateParams', '$cordovaNetwork', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaNetwork) {
	$scope.getStatus=function(){
		$scope.type = $cordovaNetwork.getNetwork();

    	$scope.isOnline = $cordovaNetwork.isOnline();

    	$scope.isOffline = $cordovaNetwork.isOffline();
    }


}])
 