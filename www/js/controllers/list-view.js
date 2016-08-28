angular.module('starter')
.controller('pagetwoCtrl',function($scope,$http){
$http({
	method:'GET',
	url:"http://api.re.wslab.in/v1/geocode"})
		.then(function(response){
		angular.forEach(response.data.device,function(child){
				console.log (child.data);
			})
			$scope.deviceDetail=response.data;
					console.log(response.data);
		});

$scope.shouldShowDelete = false;
$scope.shouldShowReorder = false;
$scope.listCanSwipe = true

});
