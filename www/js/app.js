// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


 var handleOpenURL=function (url) {
  //alert("Url Recived "+url.substr(11,url.length));
 //$state.go(url.substr(11,url.length));

   //window.localStorage.setItem("external_load",url);
    if(typeof window.localStorage.getItem("external_load")!== "undefined"){
       localStorage.removeItem("external_load");
    }
   window.localStorage.setItem("external_load",url.substr(11,url.length));
 }
var app=angular.module('starter', ['ionic','ngCordova','ui.router','starter.services'])


app.run(function($ionicPlatform,$location) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if(typeof window.localStorage.getItem("external_load")!== "undefined"){
      $location.path(window.localStorage.getItem("external_load"));
    }
  });
})
