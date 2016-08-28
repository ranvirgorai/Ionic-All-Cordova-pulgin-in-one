angular.module('starter')
.controller('detailViewCtrl',function($http,$scope,$stateParams){

$http({
	method:'GET',
	url:"http://api.re.wslab.in/v1/geocode",
	params:{serial:$stateParams.serial}
	}).then(function(response){
			$scope.deviceDetail=response.data;
			//angular.forEach(response.data, iterator, [context]);
			$scope.deviceSerial=$stateParams;
			console.log(response.data);
			console.log($stateParams.serial);
		});
});
