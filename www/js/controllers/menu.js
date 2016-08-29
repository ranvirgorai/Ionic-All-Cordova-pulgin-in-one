angular.module('starter')

.controller('menuCtrl',function($scope){
var menuList=[
	{ title:"Device Motion",url:"devicemotion"},
	{ title:"barcode",url:"barcode"},
	{ title:"Battery",  url:"battery"},
	{ title:"Service Test",  url:"pageone"},
	{ title:"Detail View",  url:"pagetwo"},
	{ title:"Ui Serf",  url:"pagethree"},
	{ title:"Device Detail",  url:"deviceinfo"},
	{ title:"Geo Location",  url:"geoloc"},
	{ title:"Geo Background",  url:"geoback"},
	{ title:"Camera",  url:"camera"},
	{ title:"Vibration",  url:"vibration"},
	{ title:"Torch",  url:"flash"}
]

$scope.menuList=menuList;
});
