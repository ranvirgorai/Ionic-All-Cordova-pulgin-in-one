angular.module('starter')

.controller('batteryCtrl',function($scope,$cordovaBatteryStatus) {

  document.addEventListener("deviceready", function () {

    $scope.$on('$cordovaBatteryStatus:status', function (result) {
     $scope.batteryLevel = result.level;       // (0 - 100)
     $scope.isPluggedIn  = result.isPlugged;   // bool
    });



  }, false);



});
