angular.module('starter')

.controller('barcodeCtrl',function($scope,$cordovaBarcodeScanner) {

  document.addEventListener("deviceready", function () {



  }, false);

  $scope.scan=function() {

  	$cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        $scope.barData=barcodeData;
      }, function(error) {
        // An error occurred
      });


   /* // NOTE: encoding not functioning yet
    $cordovaBarcodeScanner
      .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
      .then(function(success) {
   				console.log(barcodeData);
   				$scope.barData2=barcodeData;
      }, function(error) {
        // An error occurred
      });*/


  }

});
