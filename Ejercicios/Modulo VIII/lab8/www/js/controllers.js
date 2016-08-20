angular.module('app.controllers', ['ngCordova'])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs) {
	$scope.getDialogAlert = function(){
		$cordovaDialogs.alert('El mensaje fue enviado', 'Alerta', 'Aceptar')
		    .then(function() {
		      console.log('Click en el boton');
		    });		    
	};

	$scope.getDialogConfirm = function(){
		$cordovaDialogs.confirm('Confirma su pedido?', 'Confirmación', ['Aceptar','Cancelar'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
		      console.log(btnIndex);
    		});
	};

  
     $scope.getDialogPromtp = function(){
     	$cordovaDialogs.prompt('Digite su opción', 'Dialogo', ['Aceptar','Cancelar'], 'opción a escoger')
		    .then(function(result) {
		      var input = result.input1;
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = result.buttonIndex;
		      console.log(input, btnIndex);
		      localStorage.setItem('mensaje', btnIndex);
    	    });
     };


}])
   
.controller('infoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.mensaje = localStorage.getItem('mensaje');

}])
    