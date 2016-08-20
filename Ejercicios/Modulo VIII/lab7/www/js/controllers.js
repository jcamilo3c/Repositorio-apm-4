angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $cordovaDialogs) {
	$scope.getDialogAlert = function(){
		$cordovaDialogs.alert('message', 'title', 'button name')
		    .then(function() {
		      console.log('Click en el boton');
		    });
		};

	$scope.getDialogConfirm = function(){
		$cordovaDialogs.confirm('message', 'title', ['button 1','button 2'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
		      console.log(btnIndex);
    		});
	};

  
     $scope.getDialogPromtp = function(){
     	$cordovaDialogs.prompt('msg', 'title', ['btn 1','btn 2'], 'default text')
		    .then(function(result) {
		      var input = result.input1;
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = result.buttonIndex;
		      console.log(input, btnIndex);
    	});
     };
  
}])
 