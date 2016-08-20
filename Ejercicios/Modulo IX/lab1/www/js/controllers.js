angular.module('app.controllers', ['app.services'])
  
.controller('pageCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {

	$scope.getProductList = function(){
		productService.item_list.query(function(data){ /*query hace un get por debajo*/

        	$scope.list = data; /*lo que retorna el servidor*/

        	console.log($scope.list);
    });
	}
}])
 
 