 'use strict';

/* Controllers */

angular.module('f1RaceApp.controllers', [])

  // Controller for "open weather map" api data search
  .controller('F1RaceCtrl',
    ['$scope','f1RacerYearlyWinners','f1RaceResults',
      function($scope,f1RacerYearlyWinners,f1RaceResults) {

          $scope.yrWinner = '';
    // On initialization load data for first example entry
          f1RacerYearlyWinners.get().$promise.then(function(user) {
         $scope.yearlyWinners = user;
      });

          $scope.getWinnersBySeason = function(yr){
              f1RaceResults.get({season: yr }).$promise.then(function(result) {
                  $scope.winnerList = result;
              });
          }

          $scope.setSeason = function(yr, yrWinnerName) {
              //$scope.location = loc;
              $scope.yrWinner = yrWinnerName;
              $scope.getWinnersBySeason(yr);
          };

  }])

