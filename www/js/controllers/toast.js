angular.module('starter')

.controller('toastCtrl',function($scope,$cordovaToast){
$scope.showToast=function(){

$scope.name="ranvir";

  $cordovaToast
    .show('Here is a message', 'long', 'center')
    .then(function(success) {
      $scope.name="kumar";
    }, function (error) {
      // error
    });

}

});
