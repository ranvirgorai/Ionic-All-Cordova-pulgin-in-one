angular.module('starter')

.controller('geoCtrl',function($scope,$cordovaGeolocation){

//document.addEventListener("deviceready", function () {          //  Its work only on device

 //$scope.showLoc=function(){                                                     // on click button it will execute

  	var map;                                                                                    // Show map on canvas
      function initMap(coords) {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: coords.latitude, lng: coords.longitude},
          zoom: 8
        });
      }






/*
  var posOptions = {maximumAge: 3000,timeout: 10000, enableHighAccuracy: true};       // ionic Cordova Method to Get lloc
  $cordovaGeolocation.getCurrentPosition(posOptions)
    .then(function (position) {
    	initMap(position.coords)
       console.log(position);
      $scope.lat  = position.coords.latitude;
      $scope.long = position.coords.longitude;
    }, function(err) {
      console.log("Gps Position Error: "+ angular.toJson(err));
      $scope.emsg="Gps Position Error: "+ angular.toJson(err);
    });

var watchOptions = {
    timeout : 3000,
    enableHighAccuracy: true // may cause errors if true
  };

  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function(err) {
    },
    function(position) {
       console.log(position);
      $scope.wlat  = position.coords.latitude;
      $scope.long = position.coords.longitude;
  });


  watch.clearWatch();*/

var onSuccess = function(position) {
   /* alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');*/
           $scope.lat  = position.coords;
      initMap(position.coords);
      console.log(position);
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);

/*function onSuccess(position) {
      $scope.lat  = position.coords;
      initMap(position.coords);
      console.log(position);
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Options: throw an error if no update is received every 30 seconds.
//
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000});
*/
//}
 //}, false);

});
