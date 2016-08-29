angular.module('starter')

.controller('devicemotionCtrl',function($scope,$cordovaDeviceMotion) {

 $scope.show=function(){

/*    $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
      var X = result.x;
      var Y = result.y;
      var Z = result.z;
      var timeStamp = result.timestamp;
    }, function(err) {
      // An error occurred. Show a message to the user
    });
*/

  // watch Acceleration
  var options = { frequency: 20000 };

  //document.addEventListener("deviceready", function () {

    var watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
        var X = result.x;
        var Y = result.y;
        var Z = result.z;
        var timeStamp = result.timestamp;

        $scope.data=result;
        console.log('result '+result);
    });

/*
    watch.clearWatch();
    // OR
    $cordovaDeviceMotion.clearWatch(watch)
      .then(function(result) {
        console.log('Watch result '+result);
        }, function (error) {
        // error
      });*/

  }


});
