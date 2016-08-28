angular.module('starter')
.controller('geobackCtrl',function($scope, $cordovaBackgroundGeolocation) {


var map;
      function initMap(coords) {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: coords.latitude, lng: coords.longitude},
          zoom: 8
        });
      }


  var options = {
    // https://github.com/christocracy/cordova-plugin-background-geolocation#config
  };

  document.addEventListener("deviceready", function () {

    // `configure` calls `start` internally
    $cordovaBackgroundGeolocation.configure(options)
    .then(
      null, // Background never resolves
      function (err) { // error callback
        console.error(err);
      },
      function (location) { // notify callback
        console.log(location);
      });


    $scope.stopBackgroundGeolocation = function () {
      $cordovaBackgroundGeolocation.stop();
    };

  }, false);



});
