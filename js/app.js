'use strict';

// Declare app level module which depends on controllers, and services
angular.module('f1RaceApp', [
  'ngRoute',
  'f1RaceApp.services',
  'f1RaceApp.controllers',
]).
// Route  provider for navigation on f1RaceData page
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/f1RaceData', {templateUrl: 'partials/f1RaceData.html', controller: 'F1RaceCtrl'});
  $routeProvider.otherwise({redirectTo: '/f1RaceData'});
}]);
