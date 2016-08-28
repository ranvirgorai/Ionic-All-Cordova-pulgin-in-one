angular.module('starter')

.controller('flashCtrl',function ($scope,$cordovaFlashlight){

 $cordovaFlashlight.available().then(function(availability) {
    var avail = availability; // is available
  }, function () {
    // unavailable
  });

  $cordovaFlashlight.switchOn()
    .then(
      function (success) { /* success */ },
      function (error) { /* error */ });

  $cordovaFlashlight.switchOff()
    .then(
      function (success) { /* success */ },
      function (error) { /* error */ });

 $scope.toggle=function(){
	$cordovaFlashlight.toggle()
    	.then(function (success) { $scope.status="on"},
      	function (error) { /* error */ });
  }
});


