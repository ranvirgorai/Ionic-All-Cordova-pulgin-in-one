angular.module('starter')

.config(function($stateProvider, $urlRouterProvider) {

       $stateProvider
        .state('pageone', {
        url: '/pageone',
        templateUrl: 'template/page-one.html',
        controller:'pageoneCtrl',
        })
        .state('pagetwo', {
        url: '/pagetwo',
        templateUrl: 'template/page-two.html',
        controller:'pagetwoCtrl',
        })
        .state('pagethree', {
        url: '/pagethree',
        templateUrl: 'template/page-three.html',
        controller:'pagethreeCtrl',
        })
        .state('detailview', {
        url: '/detailview/:serial',
        templateUrl: 'template/detail-view.html',
        controller:'detailViewCtrl',
        })
     .state('deviceinfo', {
        url: '/deviceinfo',
        templateUrl: 'template/device-info.html',
        controller:'deviceinfoCtrl',
        })
        .state('menu', {
        url: '/menu',
        templateUrl: 'template/menu.html',
        controller:'menuCtrl',
        })
        .state('geoloc', {
        url: '/geoloc',
        templateUrl: 'template/geo-location.html',
        controller:'geoCtrl',
        }).
        state('geoback', {
        url: '/geoback',
        templateUrl: 'template/geo-back.html',
        controller:'geobackCtrl',
        })
        .state('camera', {
        url: '/camera',
        templateUrl: 'template/camera.html',
        controller:'cameraCtrl',
        })
        .state('vibration', {
        url: '/vibration',
        templateUrl: 'template/vibration.html',
        controller:'vibrationCtrl',
        })
         .state('flash', {
        url: '/flash',
        templateUrl: 'template/flash.html',
        controller:'flashCtrl',
        });
        $urlRouterProvider.otherwise('/menu');
});
