'use strict';

/**
 * @ngdoc function
 * @name githubPageApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the githubPageApp
 */
angular.module('githubPageApp')
  .controller('PortfolioCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('portfolio/portfolio.json').success(function(data) {
        $scope.portfolio = data;
    });
  }]);
