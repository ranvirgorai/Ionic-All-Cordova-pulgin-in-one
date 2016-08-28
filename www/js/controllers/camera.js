angular.module('starter')

.controller('cameraCtrl',function($scope,$cordovaCamera) {
$scope.pictureURL="http://placehold.it/300";

$scope.takePicture=function() {
     var options = {
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG
    };
  $cordovaCamera.getPicture(options)
    .then(function(data) {
      console.log('camera data'+ angular.toJson(data));
        $scope.pictureURL= 'data:image/jpeg;base64,'+data;
    },function(err) {
      //handle
      console.log('camera data'+ angular.toJson(err));
    });
};

});
