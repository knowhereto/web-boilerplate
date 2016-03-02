global.$ = global.jQuery = require('jquery');
require('foundation-sites');

$( document ).ready(function() {

    $(document).foundation();
    console.log( "knowhere template ready!" );
});

var app = require('angular').module('angularApp', []).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}'); 
});

app.controller('TestAngularCtrl', function($scope) {
  $scope.angularVar = "Hello Angular Scope";
  
  console.log("Hello Angular");
});
