angular.module('starter.controllers', [])
        .controller('loginCtrl', function($scope, $state){
        	$scope.enviar=function(correo, clave){
        		localStorage.setItem('correo');
        		localStorage.setItem('clave');
        		$state.go('info');
        	}
        })

        .controller('infoCtrl', function($scope, $state){
        	$scope.enviar=function(correo, clave){
        		localStorage.getItem('correo');
        		localStorage.getItem('clave');
        	}
        });