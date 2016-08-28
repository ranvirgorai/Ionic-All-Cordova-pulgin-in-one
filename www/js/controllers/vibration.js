angular.module('starter')

.controller('vibrationCtrl',['$scope', function($scope,$cordovaVibration) {

      $scope.sec=$scope.numberSelection;

 	$scope.vib=function () {

	$cordovaVibration.vibrate($scope.numberSelection);

}
}]);
