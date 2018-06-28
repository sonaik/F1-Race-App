'use strict';

/* Services */

angular.module('f1RaceApp.services', ['ngResource'])

  //
  // Simple value service (kept from angular-seed dist)
  //
  .value('version', '0.1.6')


  //
  // Register service for openweathermap.com
  //
  // - Inject $resource from angular-resource context
  // - Generate custom resource object able to query open weather map api with custom parameters
  // -
  // - Tricky: Avoid needing a server/proxy by forcing a JSONP request: Angular handles callback
  //   if JSON_CALLBACK is set as function name parameter in which response should be wrapped
  //   (subject to be made configurable through service initialization so that server mode using
  //    "normal" json api is supported as well)
  //
  .factory('f1RacerYearlyWinners', function($resource) {
        var apiBaseUrl = 'http://ergast.com/api/f1/driverStandings/1.json?limit=11&offset=55';
        return $resource(apiBaseUrl)
  })
    .factory('f1RaceResults', function($resource) {
        return $resource('http://ergast.com/api/f1/:season/results/1.json', {season: '@yr'})
    });

