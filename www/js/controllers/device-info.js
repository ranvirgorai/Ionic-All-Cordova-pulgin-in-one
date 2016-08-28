angular.module('starter')

.controller('deviceinfoCtrl',function($scope,$cordovaDevice){
	document.addEventListener("deviceready", function () {
     $scope.devdata = $cordovaDevice.getDevice();

  }, false);
});
