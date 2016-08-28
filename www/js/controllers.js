angular.module('starter')

.controller('pageoneCtrl',function($scope,strService){
	$scope.processStr=function(input){
	$scope.opStr=strService.proStr(input);
};
})




.controller('pagethreeCtrl',function($scope){
	$scope.name="ranvir";
});



