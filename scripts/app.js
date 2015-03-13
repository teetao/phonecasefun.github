var app = angular.module('app', ['ui.bootstrap', 'angular-growl']);


app.controller('appCtrl', ['$scope', '$http', '$location', 'growl', function ($scope, $http, $location, growl) {


  growl.info(' hello .... growl....');
  console.info("hello world...");

}])
;
