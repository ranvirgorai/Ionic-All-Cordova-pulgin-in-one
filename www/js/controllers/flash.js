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



var onShake = function () {
  // Fired when a shake is detected

  $cordovaFlashlight.switchOn()
    .then(
      function (success) { /* success */ $scope.status="Saked";},
      function (error) { /* error */ });
};

var onError = function () {
  // Fired when there is an accelerometer error (optional)
  $scope.status="Not";
};

// Start watching for shake gestures and call "onShake"
// with a shake sensitivity of 40 (optional, default 30)
shake.startWatch(onShake, 40 /*, onError */);

// Stop watching for shake gestures
//shake.stopWatch();


});


