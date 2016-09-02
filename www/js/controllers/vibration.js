angular.module('starter')

.controller('vibrationCtrl',['$scope','$state' , function($scope,$cordovaVibration,$state) {

      $scope.sec=$scope.numberSelection;

 	$scope.vib=function () {

	//$cordovaVibration.vibrate($scope.numberSelection);
	$state.go('flash');

}
}]);
