angular.module('starter')

.controller('geoCtrl',function($scope,$cordovaGeolocation){

      var map;
      var pos=[];
      var endIndex;
      var loc=0;
      function initMap(coords) {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: coords.latitude, lng: coords.longitude},
          zoom: 8
        });
      }

function onSuccess(position) {
      storeCord(position.coords,watchID,position.timestamp);
      $scope.lat  = position.coords;
      $scope.time = new Date(position.timestamp);
      //console.log(new Date(position.timestamp));
      $scope.data=++loc;
      initMap(position.coords);
      console.log(position);
}

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

var watchID = navigator.geolocation.watchPosition(onSuccess, onError /* ,{ timeout: 30000}*/);


$scope.stopTrip=function(){
navigator.geolocation.clearWatch(watchID);
endIndex=pos.length;

}



function storeCord(coords,id){
      pos.push({id : id, lat : coords.latitude, lng : coords.longitude});
}



//}
//}
 //}, false);


});
